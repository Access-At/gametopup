import CheckOrderContent from "@/Components/Content/CheckOrderContent";
import Guest from "@/Layouts/GuestLayout";

export default function CheckOrder({ auth }) {
    return (
        <Guest auth={auth}>
            <CheckOrderContent Auth={auth} />
        </Guest>
    );
}
