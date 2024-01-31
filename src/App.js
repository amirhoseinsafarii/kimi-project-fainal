import Navbar from "./components/Navbar/Navbar.component";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/products/Products";
import Product from "./pages/product/[slug]/product";
import About from "./pages/about/About";
import Footer from "./components/Footer/Footer.component";
import ErrorPage from "./pages/errorPage/ErrorPage";
import HomePage from "./pages/Home/HomePage";
import ContactUsPage from "./pages/ContactUs/ContactUsPage";
function App() {
    return (
        <>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/products" element={<Products />} />

                    <Route path="/product/:slug" element={<Product />} />

                    <Route path="/about-us" element={<About />} />

                    <Route path="*" element={<ErrorPage />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact-us" element={<ContactUsPage />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
