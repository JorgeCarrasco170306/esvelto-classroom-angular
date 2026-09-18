import { Outlet } from "react-router-dom"
import { HomeHeaderComponent } from "../components/HomeHeaderComponent"



export const HomeLayout = () => {
    return (
        <div>
            <HomeHeaderComponent/>

            <main>
                <Outlet />
            </main>
        </div>
    )
}
