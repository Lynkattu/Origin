import React from "react";

function MainHeader(props){
    return(
        <div className="mainHeader"   
            style={{
                backgroundImage: `url(${props.img})`
            }}>
            <div>
                <h2>{props.header}</h2>
                <p>{props.txt}</p>
            </div>
        </div>
    )
}

export default MainHeader