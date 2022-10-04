import PriceContent from "@/Components/Content/PriceContent";
import Guest from "@/Layouts/GuestLayout";

export default function Price({ auth }) {
    return (
        <Guest auth={auth}>
            <PriceContent Auth={auth} />
        </Guest>
    );
}
