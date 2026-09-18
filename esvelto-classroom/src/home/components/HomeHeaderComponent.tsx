import { useNavigate } from "react-router-dom"
import { ThemeToggle } from "../../shared/components/ThemeTogle"

export const HomeHeaderComponent = () => {

    const navigate = useNavigate();

    return (
        <div className="navbar bg-base-100 shadow-xl">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Esvelto</a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">


                    <div className="flex w-full">
                        <button className="btn btn-primary mx-1 btn-soft">Planes</button>
                        <button className="btn btn-primary mx-1 btn-soft">Prueba Gratuita</button>
                        <button className="btn btn-primary mx-1 " onClick={() => navigate("/auth/sign-up")}>Registrarse</button>
                        <button className="btn btn-primary mx-1 " onClick={() => navigate("/auth/sign-in")}>Logearse</button>
                        <div className="divider divider-horizontal"></div>
                        <ThemeToggle />
                    </div>

                </div>
            </div>


        </div>
    )
}