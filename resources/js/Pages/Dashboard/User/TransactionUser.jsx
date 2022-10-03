import Auth from "@/Layouts/AuthenticatedLayout";
import TransactionUserContent from "@/Components/Dashboard/User/TransactionUserContent";

export default function TransactionUser() {
    return (
        <Auth>
            <TransactionUserContent />
        </Auth>
    );
}
