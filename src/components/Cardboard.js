import React from "react";

function Cardboard(props){
    return(
        <div className="cardboard">
            <a href={props.link1} className="cardboard-div">
                <p>{props.header1}</p>
                <img src={props.img1} alt=""/>
            </a>
            <a href={props.link2} className="cardboard-div">
                <p>{props.header2}</p>
                <img src={props.img2} alt=""/>
            </a>
            <a href={props.link3} className="cardboard-div">
                <p>{props.header3}</p>
                <img src={props.img3} alt=""/>
            </a>
            <a href={props.link4} className="cardboard-div">
                <p>{props.header4}</p>
                <img src={props.img4} alt=""/>
            </a>
            <a href={props.link5}  className="cardboard-div">
                <p>{props.header5}</p>
                <img src={props.img5} alt=""/>
            </a>
            <a href={props.link6} className="cardboard-div">
                <p>{props.header6}</p>
                <img src={props.img6} alt=""/>
            </a>
            
        </div>
    )
}

export default Cardboard