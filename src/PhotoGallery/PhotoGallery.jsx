import React, { useState, useEffect } from "react";
import './PhotoGallery.scss'
import Button from "./Button/Button";
import Image from "./Image/Image";


const PhotoGalerry =()=>{
    const [readFile, setReadFile]=useState([]);
    const [isLoading, setIsLoading]=useState(false);

    useEffect(() => {
        setIsLoading(true)
        const jsonfile = "./photogallery.json";
        fetch(jsonfile)
          .then((res) => res.json())
          .then((data) => {
            setReadFile(data);                     
          })
          .catch(e => setIsLoading(false))      
      }, [setReadFile]);

    return(
        <div>
            <Button text='Roses'/>
        <div>        
            {isLoading ? readFile.map((item)=>{
                return (
                    <div>
                        <Image 
                            key={item.id} 
                            className={item.classname} 
                            src={item.src} 
                            alt={item.alt}/>
                    </div>
                )            
            }) : <p>Ошибка открытия</p>}        
        </div>
        </div>
    )
}

export default PhotoGalerry;