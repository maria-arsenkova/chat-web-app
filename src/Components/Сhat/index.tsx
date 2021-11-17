import React from "react";
import './style.scss'
import {UserType} from "../UserPhoto";
import  elon from './img/elon.svg'
import {ChatHeader} from "../ChatHeader";

const user: UserType = {
    avatar: elon,
    initials: "Elon Musk",
};

function Chat() {
    return (
        <div>
            <ChatHeader user={user} />
        </div>
    )
}

export {Chat}