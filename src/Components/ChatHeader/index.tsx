import React from "react";
import './style.scss'
import {AVATAR_SIZE, UserPhoto, UserType} from "../UserPhoto";

interface ChatHeaderProps{
    user: UserType
}
const ChatHeader = ({user}:ChatHeaderProps) => {
    return (
        <div>
            <UserPhoto user={user} size={AVATAR_SIZE.SMALL}/>
            <span>{user.initials}</span>
        </div>
    )
}

export {ChatHeader}