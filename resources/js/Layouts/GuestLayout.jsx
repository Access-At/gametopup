import Footer from "@/Components/Utils/Footer";
import Navigation from "@/Components/Utils/Navigation";

export default function Guest({ auth, children }) {
    return (
        <>
            <Navigation Auth={auth} />
            {children}
            <Footer Auth={auth} />
        </>
    );
}
