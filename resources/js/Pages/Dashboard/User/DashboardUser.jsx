import UserContent from "@/Components/Dashboard/User/UserContent";
import Auth from "@/Layouts/AuthenticatedLayout";

export default function DashboardUser() {
    return (
        <Auth>
            <UserContent />
        </Auth>
    );
}
