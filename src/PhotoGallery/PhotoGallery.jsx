import React, { useState, useEffect, Fragment } from "react";
import './PhotoGallery.scss'
import Button from "./Button/Button";
import Image from "./Image/Image";


const PhotoGalerry =()=>{
    const [readFile, setReadFile]=useState([]);
    const [filterImg, setFilterImg]=useState([]);
    const [isLoading, setIsLoading]=useState(false);

    useEffect(() => {
        setIsLoading(true)
        const jsonfile = "./photogallery.json";
        fetch(jsonfile)
          .then((res) => res.json())
          .then((data) => {
            setReadFile(data);  
            setFilterImg(data);                
          })
          .catch(e => setIsLoading(false))      
      }, [setReadFile]);

      const btnClick =(e)=>{
        console.log(e.target.className)
        if (e.target.className === 'all'){
            setFilterImg(readFile)
        } else {
            let filter = readFile.filter(el => el.classname === e.target.className)       
            setFilterImg(filter)        
        }        
      }

    return(
        <div>
            <div className="photogallery__btn">
                <button onClick={btnClick} className='all'>All</button>
                <button onClick={btnClick} className='roses'>Roses</button>
                <button onClick={btnClick} className='tulpans'>Tulpans</button>
                {/* <Button text='All' className='all'/>
                <Button text='Roses' className='roses'/>
                <Button text='Tulpans' className='tulpans'/> */}
            </div>
            <div className="photogallery">        
                {isLoading ? filterImg.map((item)=>{
                    return (
                        <Fragment key={item.id} >
                            <Image                                                        
                                className={item.classname}
                                src={item.src} 
                                alt={item.alt}/>
                        </Fragment>
                    )            
                }) : <p>Ошибка открытия</p>}        
            </div>
            <button>Показать еще</button>
        </div>
    )
}

export default PhotoGalerry;