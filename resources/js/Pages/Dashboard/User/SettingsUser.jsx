import SettingsUserContent from "@/Components/Dashboard/User/SettingsUserContent";
import Auth from "@/Layouts/AuthenticatedLayout";

export default function SettingsUser() {
    return (
        <Auth>
            <SettingsUserContent />
        </Auth>
    );
}
