import React from "react";


function ItemContent(props){
    return(
        <div className="itemContent">
            <h3>{props.header}</h3>
            <div className="itemContent-div">
                <img src={props.img} alt=""/>
                <p>{props.txt}</p>

            </div>
        </div>
    )
}

export default ItemContent