import React from "react";
import "./Cards.css";
import Starlogo from "./images/Star 1.png";
// import Islandimg from "./images/island-1.webp"
import { Items } from "./CardsObj";



const Cards = () => {
    return (
        
        <div className="cards" id="cards">
        {Items.map((item) => {
            return (
                <div className="card">
        <div className="card-img">
            <a href="http://" target="_blank" rel="noopener noreferrer">
            <div className="overlays"></div>
            <img src={item.image} alt="city" className="img-card"/>
            <div class="content-details fadeIn-bottom">
            <h3 class="content-title">EXPLORE</h3>
            </div>
            </a>
        </div>
        <div className="card-info">
            <div className="loc-rate">
            <p className="location">{ item.location }</p>
            <p className="distance">{ item.distance }</p>
            <p className="card-cty"></p>
            <p className="date">{ item.date }</p>
            <p><span className="price-bold">${ item.price } </span> night</p>
            </div>
            <div>
            <img src={Starlogo} alt="" className="img-star"/><span>{ item.rate }</span>
            </div>
        </div>
        </div>
        
        );
    }
    )
}
</div>
    );
}

export default Cards;
