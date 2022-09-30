import Footer from "@/Components/Utils/Footer";
import Navigation from "@/Components/Utils/Navigation";

export default function Guest({ children }) {
    return (
        <>
            <Navigation />
            <div>{children}</div>
            <Footer />
        </>
    );
}
