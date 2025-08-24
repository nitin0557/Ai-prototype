import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { AuthProvider } from "@/data/contexts/AuthContext";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <Component {...pageProps} />
            </ThemeProvider>
        </AuthProvider>
    );
}
