import Footer from "@/Components/Utils/Footer";
import Navigation from "@/Components/Utils/Navigation";

export default function Authenticated({ children }) {
    return (
        <>
            <Navigation Auth={true} />
            {children}
            <Footer Auth={true} />
        </>
    );
}
