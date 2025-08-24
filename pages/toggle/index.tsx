import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-3 py-2 rounded bg-gray-200 dark:bg-gray-800 dark:text-white"
        >
            Toggle {theme === "dark" ? "Light" : "Dark"}
        </button>
    );
}
