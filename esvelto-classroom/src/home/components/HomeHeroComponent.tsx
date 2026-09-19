export const HomeHeroComponent = () => {
    return (
        <section className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-3xl">

                    <div className="aura aura-rainbow">

                        <div className="card bg-base-100">

                            <div className="card-body">

                                <h1 className="p-3 text-5xl font-bold md:text-7xl">
                                    Aprende.
                                    <span className="text-primary"> Enseña.</span>
                                    <br />
                                    Crece.
                                    <span className="text-primary"> IA.</span>
                                </h1>
                            </div>
                        </div>
                    </div>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-base-content/70 md:text-xl">
                        Esvelto Classroom es una plataforma para gestionar
                        estudiantes, profesores e instituciones desde un solo
                        lugar enfocada en la calificacion de asignaciones mediante IA. {" "}
                        <span className="text-primary">
                            Invierte tu tiempo.
                        </span>
                    </p>


                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                        <button className="btn btn-primary btn-lg">
                            Leer Más
                        </button>

                    </div>

                    <p className="mt-6 text-sm text-base-content/50">
                        Una experiencia educativa simple, organizada y moderna.
                    </p>
                </div>
            </div>
        </section>
    );
};