import { Routes, Route } from "react-router-dom"
import  HomePage  from './pages/HomePage';
import Footer from './components/Footer'
import Header from './components/Header'

function Application() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
            <Footer></Footer>
        </div>
    )
}

export default Application