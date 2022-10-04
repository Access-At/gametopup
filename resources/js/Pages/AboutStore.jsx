import AboutStoreContent from "@/Components/Content/AboutStoreContent";
import Guest from "@/Layouts/GuestLayout";

export default function AboutStore({ auth }) {
    return (
        <Guest auth={auth}>
            <AboutStoreContent Auth={auth} />
        </Guest>
    );
}
