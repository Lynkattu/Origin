import React from "react";
import LinkBt from "./LinkBt";
function MainContent(props){
    return(
        <div className="mainContent"
        style={{
            backgroundImage: `url(${props.backImg})`
        }}>
            <h3>{props.header}</h3>
            <div className="mainContent-div">
                <div className="mainContent-div-leftside">
                    <p>{props.txt}</p>
                    <LinkBt link={props.link} txt={props.btTxt}/>
                </div>
                <img src={props.img} alt=""/>
            </div>
        </div>
    )
}

export default MainContent