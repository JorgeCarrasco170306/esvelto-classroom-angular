import { AppRoutes } from "./routes/AppRoutes"
import { FooterComponent } from "./shared/components/FooterComponent"

export const App = () => {
    return (
        <div>
            <AppRoutes />
            <FooterComponent />
        </div>
    )
}