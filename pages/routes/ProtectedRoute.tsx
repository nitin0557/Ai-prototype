import {ReactNode, useEffect} from "react";
import { useRouter } from "next/router";
import {useAuth} from "@/data/contexts/AuthContext";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/auth/login");
        }
    }, [user, router]);

    if (!user) return null; // prevent flashing

    return children;
}
