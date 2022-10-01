import HomeContent from "@/Components/Content/HomeContent";
import Guest from "@/Layouts/GuestLayout";

export default function Home({ phpVersion, laravelVersion }) {
    return (
        <Guest>
            <HomeContent />
        </Guest>
    );
}
