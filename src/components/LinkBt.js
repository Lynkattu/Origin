import React from "react";

function LinkBt(props){
    return(
        <a className="linkBt" href={props.link}>{props.txt}</a>
    )
}

export default LinkBt