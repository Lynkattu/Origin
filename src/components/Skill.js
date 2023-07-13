import React from "react";

function Skill(props){
    return(
        <div className="skill">
            <img className="skill-img" src={props.img} alt=""/>
            <p>{props.txt}</p>
        </div>
    )
}

export default Skill