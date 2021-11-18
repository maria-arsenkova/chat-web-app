import React from "react";
import './style.scss'
import {UserType} from "../UserPhoto";
import  elon from './img/elon.svg'
import {ChatHeader} from "../ChatHeader";
import {ChatFooter} from "../ChatFooter";

export const user: UserType = {
    avatar: elon,
    initials: "Elon Musk",
};

function Chat() {
    return (
        <div className='Chat'>
            <ChatHeader user={user} />
            <ChatFooter />
        </div>
    )
}

export {Chat}