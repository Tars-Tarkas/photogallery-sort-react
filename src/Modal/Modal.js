import React from "react";
import "./Modal.scss"


const Modal = ( {showModal, hideModal} ) => {   
    if (!showModal) {
        return null}
    return(    
        <div className="modal" onClick={hideModal} >
            <div className="modal__content">

            </div>
        </div>
    )
}

export default Modal;