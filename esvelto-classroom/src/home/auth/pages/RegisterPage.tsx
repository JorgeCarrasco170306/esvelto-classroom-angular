import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/auth.service";

export const RegisterPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        email: "",
        birthdate: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    // Manejador centralizado para todos los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        if (formData.password !== formData.confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        if (formData.password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        if (!formData.terms) {
            setError("Debes aceptar los términos y condiciones.");
            return;
        }

        setLoading(true);

        try {
            // Extraemos solo lo necesario para el backend, descartando confirmPassword y terms
            const { confirmPassword, terms, ...registerPayload } = formData;

            await register(registerPayload);

            navigate("/dashboard");
        } catch (err: any) {
            const message =
                err.response?.data?.message ||
                err.message ||
                "Ocurrió un error al registrar la cuenta.";
            setError(message);
            console.error("Error en registro:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
            <div className="card w-full max-w-2xl bg-base-100 shadow-xl">
                <div className="card-body">

                    {/* Header */}
                    <div className="mb-6 text-center">
                        <h1 className="text-3xl font-bold">Crear una cuenta</h1>
                        <p className="mt-2 text-base-content/60">
                            Únete a Esvelto Classroom y comienza a gestionar tu experiencia educativa.
                        </p>
                    </div>

                    {/* Alert visual de error */}
                    {error && (
                        <div role="alert" className="alert alert-error text-sm py-2">
                            <span>{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Nombre y apellido */}
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Nombre</legend>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="input w-full"
                                    placeholder="Nombre"
                                />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Apellido</legend>
                                <input
                                    type="text"
                                    name="lastname"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    required
                                    className="input w-full"
                                    placeholder="Apellido"
                                />
                            </fieldset>
                        </div>

                        {/* Email */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Correo electrónico</legend>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="input w-full"
                                placeholder="correo@ejemplo.com"
                            />
                            <p className="label">
                                Utilizaremos este correo para iniciar sesión.
                            </p>
                        </fieldset>

                        {/* Fecha de nacimiento */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Fecha de nacimiento</legend>
                            <input
                                type="date"
                                name="birthdate"
                                value={formData.birthdate}
                                onChange={handleChange}
                                required
                                className="input w-full"
                            />
                        </fieldset>

                        {/* Password y confirmación */}
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Contraseña</legend>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    className="input w-full"
                                    placeholder="••••••••"
                                />
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Confirmar contraseña</legend>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    className="input w-full"
                                    placeholder="••••••••"
                                />
                            </fieldset>
                        </div>

                        {/* Terms */}
                        <label className="label cursor-pointer justify-start gap-3">
                            <input
                                type="checkbox"
                                name="terms"
                                checked={formData.terms}
                                onChange={handleChange}
                                className="checkbox checkbox-primary"
                            />
                            <span className="text-sm">
                                Acepto los términos y condiciones de Esvelto Classroom.
                            </span>
                        </label>

                        {/* Submit */}
                        <button
                            disabled={loading}
                            type="submit"
                            className="btn btn-primary w-full"
                        >
                            {loading ? (
                                <span className="loading loading-spinner"></span>
                            ) : (
                                "Crear Cuenta"
                            )}
                        </button>
                    </form>

                    {/* Login */}
                    <div className="divider">O</div>

                    <p className="text-center text-sm text-base-content/70">
                        ¿Ya tienes una cuenta?{" "}
                        <Link to="/auth/sign-in" className="link link-primary font-medium">
                            Inicia sesión
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
};