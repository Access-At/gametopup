import HomeContent from "@/Components/Content/HomeContent";
import Guest from "@/Layouts/GuestLayout";

export default function Home({ auth }) {
    return (
        <Guest auth={auth}>
            <HomeContent Auth={auth} />
        </Guest>
    );
}
