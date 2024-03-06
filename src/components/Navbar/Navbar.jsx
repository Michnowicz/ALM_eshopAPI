import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar() {
    

    return(
        <nav>
            <div className="link">
                <Link to="/"><button className="btnLink">HOME</button></Link>
                <Link to="/products"><button className="btnLink">PRODUCTS</button></Link>
            </div>
            <div className="logo">
                <div>Logo</div>
            </div>
            <div className="link">
                <Link><button className="btnLink">ABOUT</button></Link>
                <Link><button className="btnLink">CONTACT</button></Link>
            </div>
        </nav>
    )
}