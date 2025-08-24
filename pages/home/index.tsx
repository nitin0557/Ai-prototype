import ProtectedRoute from "@/pages/routes/ProtectedRoute";
import {Main} from "@/pages/home/components/Main";

export default function Home() {
    return (
        <ProtectedRoute>
            <Main/>
         </ProtectedRoute>
    );
}
