import React from "react";

import Skill from "./Skill";


function BackgroundContent(props){
    return(
        <div className="backgroundContent">
            <h3>{props.header}</h3>
            <div className="backgroundContent-div">
                <img src={props.img} alt=""/>
                <div>
                    <p>{props.txt}</p>
                    <Skill
                        img={props.iconImg1}
                        txt={props.iconTxt1}
                    />
                    <Skill
                        img={props.iconImg2}
                        txt={props.iconTxt2}
                    />
                </div>
            </div>
        </div>
    )
}

export default BackgroundContent