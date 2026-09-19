import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../home/pages/HomePage";
import { HomeLayout } from "../home/layout/HomeLayout";
import { LoginPage } from "../home/auth/pages/LoginPage";
import { RegisterPage } from "../home/auth/pages/RegisterPage";
import { VerificationEmail } from "../home/auth/pages/VerificationEmail";

export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>

                <Route element={<HomeLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/auth/sign-in" element={<LoginPage />} />
                    <Route path="/auth/sign-up" element={<RegisterPage />} />
                    <Route path="/auth/verificate-email" element={<VerificationEmail />} />
                </Route>


            </Routes>
        </BrowserRouter>
    )
}