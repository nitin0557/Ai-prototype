import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

type AuthContextType = {
    user: string | null;
    onlogin: (username: string, password: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(storedUser);
    }, []);

    const onlogin = (username: string, password: string) => {
        if (username === "admin" && password === "1234") {
            setUser(username);
            localStorage.setItem("user", username);
            router.push("/home");
        } else {
            alert("Invalid credentials");
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        router.push("/auth/login");
    };

    return (
        <AuthContext.Provider value={{ user, onlogin, logout }}>
      {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
    return ctx;
};
