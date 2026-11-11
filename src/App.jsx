import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home.jsx';
import Contact from "./pages/Contact";

function App() {
    return (
        <>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            <Footer/>
        </>
    )
}

export default App;