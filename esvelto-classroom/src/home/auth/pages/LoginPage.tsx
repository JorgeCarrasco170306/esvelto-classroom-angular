import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import { login } from "../services/auth.service";

export const LoginPage = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev, [name]: value,
        }))
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        setLoading(true);

        try {
            await login(formData);
            navigate("/dashboard");
        } catch (err: any) {
            console.error("Error en login:", err);
        } finally {
            setLoading(false);
        }

    }



    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
            <div className="card w-full max-w-md bg-base-100 shadow-xl">
                <div className="card-body">

                    {/* Header */}
                    <div className="mb-6 text-center">
                        <div className="mb-4 flex justify-center">
                            <div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-content">
                                <span className="text-2xl font-bold">E</span>
                            </div>
                        </div>

                        <h1 className="text-3xl font-bold">
                            Bienvenido de nuevo
                        </h1>

                        <p className="mt-2 text-base-content/60">
                            Inicia sesión en Esvelto Classroom
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Email */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">
                                Correo electrónico
                            </legend>

                            <label className="input w-full">
                                <Mail className="size-5 text-base-content/50" />

                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    placeholder="correo@ejemplo.com"
                                    autoComplete="email"
                                />
                            </label>
                        </fieldset>

                        {/* Password */}
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">
                                Contraseña
                            </legend>

                            <label className="input w-full">
                                <Lock className="size-5 text-base-content/50" />

                                <input
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    type="password"
                                    placeholder="••••••••"
                                    autoComplete="current-password"
                                />
                            </label>
                        </fieldset>

                        {/* Remember / Forgot */}
                        <div className="flex items-center justify-between">
                            <label className="label cursor-pointer gap-2">
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-primary checkbox-sm"
                                />

                                <span className="text-sm">
                                    Recordarme
                                </span>
                            </label>

                            <Link
                                to="/forgot-password"
                                className="link link-primary text-sm"
                            >
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="btn btn-primary w-full"
                        >{
                                loading ?
                                    (
                                        <span className="loading loading-spinner"></span>
                                    )
                                    :
                                    ("Iniciar Session")
                            }
                        </button>
                    </form>

                    <div className="divider">O</div>

                    {/* Register */}
                    <p className="text-center text-sm text-base-content/70">
                        ¿No tienes una cuenta?{" "}
                        <Link
                            to="/auth/register"
                            className="link link-primary font-medium"
                        >
                            Crear una cuenta
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
};
