import UserContent from "@/Components/Dashboard/User/UserContent";
import Auth from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/inertia-react";
import { useEffect } from "react";

export default function DashboardUser({ auth, error }) {
    return (
        <Auth auth={auth} error={error}>
            <UserContent Auth={auth} />
        </Auth>
    );
}
