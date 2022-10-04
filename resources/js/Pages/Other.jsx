import OtherPageContent from "@/Components/Content/OtherPageContent";
import Guest from "@/Layouts/GuestLayout";

export default function Other(props) {
    const { menu, auth } = props;
    return (
        <Guest auth={auth}>
            <OtherPageContent Auth={auth} Menu={menu} />
        </Guest>
    );
}
