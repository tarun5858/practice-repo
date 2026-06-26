import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import ProductDetails from "./ProductDetail";
import About from "./About";


export default function ProductApp(){
    return (
        <BrowserRouter>
        {/* Navigation Bar (Bina Page Refresh ke chalne wali links) */}
        <nav style={styles.nav}>
            <Link to="/" style={styles.nav}> Home </Link>
            <Link to="/about" style={styles.link}>About</Link>
        </nav>

        {/* Raste (Routes) Define Karna */}
        <Routes>
            <Route path="/" element={<Home/>}>Home</Route>
            <Route path="/about" element={<About/>}></Route>
            {/* Dynamic Route: ':id' ka matlab yahan kuch bhi number/id aa sakti hai */}
            <Route path="/product/:id" element={<ProductDetails/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

const styles = {
  nav: { background: "#333", padding: "15px", display: "flex", gap: "20px" },
  link: { color: "#fff", textDecoration: "none", fontSize: "1.2rem", fontWeight: "bold" }
};