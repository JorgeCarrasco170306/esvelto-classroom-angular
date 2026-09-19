import { SunMoon } from "lucide-react";
import { useState } from "react";

export const ThemeToggle = () => {
    const [theme, setTheme] = useState(
        document.documentElement.getAttribute("data-theme") ?? "light"
    );

    const toggleTheme = () => {
        const newTheme = theme === "corporate" ? "night" : "corporate";

        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);

        setTheme(newTheme);
    };

    return (
        <button className="btn btn-primary mx-1 btn-soft" onClick={toggleTheme}><SunMoon /></button>
    );
};