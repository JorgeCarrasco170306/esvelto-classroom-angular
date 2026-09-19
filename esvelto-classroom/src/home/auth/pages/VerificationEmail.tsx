
import { MailCheck, ShieldCheck } from "lucide-react";

export const VerificationEmail = () => {

    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-base-200 px-4 py-10">
            <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -right-20 size-96 rounded-full bg-secondary/10 blur-3xl" />

            <section className="card relative w-full max-w-lg overflow-hidden border border-base-300 bg-base-100 shadow-2xl">
                <div className="h-2 bg-primary" />

                <div className="card-body items-center px-6 py-10 text-center sm:px-12">
                    <div className="mb-3 flex size-10 items-center justify-center rounded-3xl bg-primary/10 text-primary ring-8 ring-primary/5">
                        <MailCheck className="size-10" strokeWidth={1.8} />
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-base-content sm:text-4xl">
                        Revisa tu correo
                    </h1>
                    <p className="mt-3 max-w-sm text-base leading-7 text-base-content/60">
                        Te hemos enviado un código de 6 dígitos. Escríbelo aquí para continuar con tu cuenta.
                    </p>

                    <div className="mt-8 w-full">
                        <label className="mb-3 block text-left text-sm font-semibold text-base-content/80" htmlFor="verification-code-0">
                            Código de verificación
                        </label>
                        <div className="flex justify-center gap-2 sm:gap-3">
                        </div>
                    </div>

                    <button
                        type="button"
                        className="btn btn-primary mt-8 w-full disabled:opacity-50"
                    >
                        <ShieldCheck className="size-5" />
                        Verificar código
                    </button>

                    <div className="mt-6 flex flex-col items-center gap-2 text-sm text-base-content/60 sm:flex-row sm:justify-center">
                        <button
                            type="button"
                            className="btn btn-ghost btn-sm gap-2 text-primary"
                        >
                        </button>
                    </div>

                </div>
            </section>
        </main>
    );
};
