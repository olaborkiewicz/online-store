import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
    )
};

export default Layout;
