import React from 'react'
import './style.scss'
import { AVATAR_SIZE, UserPhoto, UserType } from '../UserPhoto'

interface ChatHeaderProps {
  user: UserType
}

const ChatHeader = ({ user }: ChatHeaderProps) => {
  return (
    <div className="ChatHeader">
      <span className="ChatHeader__user-photo">
        <UserPhoto user={user} size={AVATAR_SIZE.SMALL} />
      </span>
      <span className="ChatHeader__user-name">{user.initials}</span>
    </div>
  )
}

export { ChatHeader }
