import React from 'react'
import './style.scss'
import { UserType } from '../UserPhoto'
import elon from './img/elon.svg'
import { ChatHeader } from '../ChatHeader'
import { ChatFooter } from '../ChatFooter'
import { ChatContent } from '../ChatContent'

export const user: UserType = {
  avatar: elon,
  initials: 'Elon Musk',
}

function Chat() {
  return (
    <div className="Chat">
      <ChatHeader user={user} />
      <ChatContent />
      <ChatFooter />
    </div>
  )
}

export { Chat }
