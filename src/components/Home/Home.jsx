import "./Home.css"
import Navbar from "../Navbar/Navbar.jsx"
import { useEffect, useState } from "react"

export default function Home({data}) {

    let [select, setSelect] = useState(0)
    let [position, setPosition] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            if (select < (data.length-1)) {
                setSelect(select+1)
                setPosition(position+220)
            } else if (select == (data.length-1)) {
                setSelect(0)
                setPosition(0)
            }
            console.log(select);
        },3000)
    },[select])
    

    return(
        <section className="Home">
            <Navbar/>
            <div className="mainContainer">

                <div className="container">
                    <div className="carouselDiv">
                        <div className="carousel">
                            {
                                data.map((d,i) => (
                                    <div key={i} id={i} className={select == i ? "carouselProduct select" : "carouselProduct unselect"} style={{right: position}}>
                                        <div id={i} className="carouselImage">
                                            <img id={i} src={d.image} alt="" />
                                        </div>
                                        <p id={i} className="carTitle">{d.title}</p>
                                    </div>
                                    
                                ))
                            }
                        </div>
                        
                    </div>
                </div>

                <div className="container">
                    <div className="cardDiv">
                        {
                            data.filter(d => d.rating.rate >= 4.0).map((d,i)=>(
                                <div key={i} className="card">
                                    <h3>{d.title}</h3>
                                    <div className="image">
                                        <img src={d.image} alt="" />
                                    </div>
                                    <p>rating: {d.rating.rate}</p>
                                    <div className="buy">
                                        <button className="btnBuy">BUY NOW</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </section>
    )
}