import React, { useState, useEffect, Fragment} from "react";
import './PhotoGallery.scss'
import Image from "./Image/Image";

// import Modal from "../Modal/Modal";


const PhotoGalerry =()=>{
    const [readFile, setReadFile]=useState([]);
    const [filterImg, setFilterImg]=useState([]);
    const [isLoading, setIsLoading]=useState(false);
    const [counts, setCounts]=useState({});
    const [toggle, setToggle]=useState(false);
    // const [showModal, SetShowModal] = useState(false)


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
        setToggle(true)
        if (e.target.className === 'all'){
            setFilterImg(readFile);
        } else {
            let filter = readFile.filter(el=> el.classname === e.target.className)
            setFilterImg(filter);
          }            
        }                     

      useEffect(() => {
        let counts = readFile.reduce(function(count, item){
            count[item.classname] = (count[item.classname] || 0) + 1;
            return (count);          
        },{})      
          setCounts({'all':readFile.length, ...counts})       
      }, [readFile]);
      
      console.log(toggle)
    return(  
      <div>
      {isLoading ? (        
        <div>          
            <div className="photogallery__btn">
             {Object.entries(counts).map(([key, val], i) => (
                <button 
                  onClick={btnClick} 
                  className={key} 
                  key={i}>
                  {key} ({val})
                </button>
              ))}
            </div>            
            <div className="photogallery">                                   
                {filterImg.map((item)=>{
                    return (                        
                      <Fragment key={item.id}>                       
                        <Image                                                                                           
                          // className={item.classname ? "toggleIn" : "toggleOut"}
                          className={item.classname || toggle ? "toggleIn" : ""}
                          // className={item.classname}
                          src={item.src} 
                          alt={item.alt}/>                            
                      </Fragment>                      
                    )            
                })
              }
                
              

            </div>           
        </div>      
      ) : <p>Нет данных</p>}
      </div>
    )
}

export default PhotoGalerry;