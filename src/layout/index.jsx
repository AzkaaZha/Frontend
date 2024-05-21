/* eslint-disable react/prop-types */
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Container from "../components/index";

function Layout ({ children }) {
    return (
        <>
            <Navbar />
            <Container>{children}</Container>
            <Footer />
        </>
    );
}

export default Layout;