import React from "react";
import LinkBt from "./LinkBt";

function MainContentVariation(props){
    return(
        <div
        className="mainContentVar"
        style={{
            backgroundImage: `url(${props.backImg})`
        }}>
            <h3>{props.header}</h3>
            <p>{props.txt}</p>
            <img src={props.img} alt=""/>            
            <LinkBt link={props.link} txt={props.btTxt}/>

        </div>
    )
}

export default MainContentVariation