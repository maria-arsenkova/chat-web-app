import React from "react";
import './style.scss'

const ChatFooter = () => {
    const handleTextAreaHeight = (event:any) => {
        event.target.style.height = "auto";
        event.target.style.height = event.target.scrollHeight + "px";
    }
    return(
    <textarea
        autoFocus={true}
        rows={1}
        className='ChatFooter__enter-text-message'
        placeholder="Enter text message..."
        onChange={handleTextAreaHeight}
    />

)
}

export {ChatFooter}