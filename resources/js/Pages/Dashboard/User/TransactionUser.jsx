import Auth from "@/Layouts/AuthenticatedLayout";
import TransactionUserContent from "@/Components/Dashboard/User/TransactionUserContent";

export default function TransactionUser({ auth }) {
    return (
        <Auth auth={auth}>
            <TransactionUserContent Auth={auth} />
        </Auth>
    );
}
