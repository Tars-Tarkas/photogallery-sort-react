import React from "react";
import './Image.scss';


const Image =({className, alt, src})=>{
    return(
        <img className={className} alt={alt} src={src} />
    )
}

export default Image;