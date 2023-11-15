import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import Footer from './components/Footer'
import Header from './components/Header'
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";
import { CartProvider } from "./context/CartContext";
import HomePagePanel from './pages/panel/PanelPage'

function Application() {
    return (
        <div>
            <CartProvider>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/panel" element={<HomePagePanel />} />
                    <Route path="/terms" element={<FaqPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer></Footer>
            </CartProvider>
        </div>
    )
}

export default Application