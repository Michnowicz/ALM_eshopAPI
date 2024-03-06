import { useParams } from "react-router-dom"
import "./ProductDetail.css"

import Navbar from "../../Navbar/Navbar.jsx"

export default function ProductDetail({data}) {
    
    const {id} = useParams()

    return(
        <div className="Detail">
            <Navbar/>

            <div className="mainContainer">
                <div className="container">
                    {data.filter(d => d.id == id).map((d,i)=>(
                        <div key={i} className="prod">
                            <div className="leftDiv">
                                <img src={d.image} alt=""/>
                            </div>
                            <div className="rightDiv">
                                <div className="prodContainer">
                                    <h3>{d.title}</h3>
                                    <div className="rating">
                                        <p>{d.rating.rate}</p>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <p><b>{d.price} $</b>
                                    </p>
                                    <p><b>category:</b> {d.category}</p>
                                    <p><b>description:</b> {d.description}</p>
                                    <div className="ProdBtn">
                                        <button>BUY</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}