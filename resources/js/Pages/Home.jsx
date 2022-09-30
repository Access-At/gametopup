import HomeContent from "@/Components/Home/HomeContent";
import Guest from "@/Layouts/GuestLayout";

export default function Home({ phpVersion, laravelVersion }) {
    return (
        <Guest>
            <HomeContent />
        </Guest>
    );
}
