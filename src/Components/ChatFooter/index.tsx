import React from "react";
import './style.scss'

const ChatFooter = () => {
    return(
    <textarea
        autoFocus={true}
        rows={1}
        className='ChatFooter__enter-text-message'
        placeholder="Enter text message..."
    />

)
}

export {ChatFooter}