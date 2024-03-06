import "./Products.css"
import Navbar from "../Navbar/Navbar.jsx"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function Products({data}) {

    let [select, setSelect] = useState('')
    
    function handleIn(e) {
        setSelect(e.target.id)
    }
    function handleOut(e) {
        setSelect('')
    }


    return(
        <div className="Products">
            <Navbar/>

            <div className="mainContainer">
                <div className="allProducts container">
                    {
                        data.map((d,i) => (
                            
                            <div key={i} id={i} className={select == (d.id-1) ? "product select" : "product"} onMouseEnter={handleIn} onMouseLeave={handleOut}>
                                <Link to={"/products/"+d.id} className="title" id={i}>
                                <div id={i} className="productImage">
                                    <img src={d.image} alt="" id={i}/>
                                </div>
                                <p className="title" id={i}>{d.title}</p>
                                <p id={i}>{d.price} $</p>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}