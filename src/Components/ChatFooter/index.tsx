import React from "react";
import './style.scss'

const ChatFooter = () => {
    return(
        <input type='text' autoFocus={true} className='ChatFooter__enter-text-message' placeholder="Enter text message..."/>
    )
}

export {ChatFooter}