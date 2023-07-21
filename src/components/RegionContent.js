import React from "react";


function RegionContent(props){
    return(
        <div className="regionContent">
            <h3>{props.header}</h3>
            <div className="regionContent-div">
                <p>{props.txt}</p>
                <div className="regionContent-div-imgDiv">
                    <img src={props.img1} alt=""/>
                    <img src={props.img2} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default RegionContent