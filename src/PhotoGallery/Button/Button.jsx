import React from "react";
import './Button.scss';


const Button =({text})=>{
    return(
        <button className='bg-slate-600 pl-6 pr-6'>{text}</button>
    )
}

export default Button;