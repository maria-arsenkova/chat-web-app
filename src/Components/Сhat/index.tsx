import React from 'react'
import './style.scss'
import elon from './img/elon.svg'
import { ChatHeader } from '../ChatHeader'
import { ChatFooter } from '../ChatFooter'
import { MessageType, UserType } from '../Messages/types'
import { Messages } from '../Messages'

const user: UserType = {
  avatar: elon,
  initials: 'Elon Musk',
}

const INITIAL_MESSAGE: MessageType[] = [
  {
    author: {
      avatar: elon,
      initials: 'Elon Musk',
    },
    date: '7:41 PM',
    text: 'Hi John, what do you think about corporate messengers? I know some new apps on UC market',
    id: '001',
  },
  {
    author: {
      avatar: elon,
      initials: 'Elon Musk',
    },
    date: '7:41 PM',
    text:
      'I did’t have time to study all unified communications market.\n' +
      'The real issue is overload.',
    id: '002',
  },
  {
    author: {
      avatar: elon,
      initials: 'Elon Musk',
    },
    date: '7:41 PM',
    text: 'Ok, just do it',
    id: '003',
  },
]

function Chat() {
  return (
    <div className="Chat">
      <ChatHeader user={user} />
      <Messages messages={INITIAL_MESSAGE} />
      <ChatFooter user={user} />
    </div>
  )
}

export { Chat }
