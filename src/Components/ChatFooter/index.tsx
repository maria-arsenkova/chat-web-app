import React, {useState} from "react";
import './style.scss'
import {UserType} from "../UserPhoto";
import vectorInacteve from './img/vector.svg'
import {user} from "../Сhat";

interface MessageProps {
    author: UserType;
    date: string;
    text: string;
    id: string;
}


const ChatFooter = () => {
    const [message, setMessage] = useState<MessageProps> ({
        id: "",
        text: "",
        date: "",
        author: user,
    })
    const handleTextAreaHeight = (event:any) => {
        event.target.style.height = "auto";
        event.target.style.height = event.target.scrollHeight + "px";
    }
    const vector:string = vectorInacteve

    const handleComment = (
        newId: string,
        newMessage: string,
        newDate: string,
    ) => {
        if (newMessage.trim() !== "") {
            setMessage({
                id: newId,
                text: newMessage,
                date: newDate,
                author: message.author,
            });
        }
    }

    const createMessage = () => {
        setMessage({
            id: message.id,
            text: message.text,
            date: new Date().toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
            }),
            author: message.author,
        })
    }

    return(
        <div className='ChatFooter'>
            <textarea
                autoFocus={true}
                rows={1}
                className='ChatFooter__enter-text-message'
                placeholder="Enter text message..."
                onChange={(event) => {handleTextAreaHeight(event);
                    handleComment(
                        event.target.value,
                        Date.now().toString(),
                        new Date().toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                        })
                    )
                }}
            />
            <button
            onClick={createMessage}
            >test</button>
            <img src={vector}/>
        </div>
)
}

export {ChatFooter}