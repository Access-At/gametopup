import SettingsUserContent from "@/Components/Dashboard/User/SettingsUserContent";
import Auth from "@/Layouts/AuthenticatedLayout";

export default function SettingsUser({ auth }) {
    return (
        <Auth auth={auth}>
            <SettingsUserContent Auth={auth} />
        </Auth>
    );
}
