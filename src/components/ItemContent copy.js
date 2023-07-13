import React from "react";


function ItemContent(props){
    return(
        <div className="itemContent">
            <h3>{props.header}</h3>
            <div className="itemContent-div">
                <img src={props.img1} alt=""/>
                <img src={props.img2} alt=""/>
                <p>{props.txt}</p>
                <img src={props.img3} alt=""/>

            </div>
        </div>
    )
}

export default ItemContent