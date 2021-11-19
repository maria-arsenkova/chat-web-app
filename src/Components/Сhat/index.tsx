import React, { useState, useEffect } from 'react'
import './style.scss'
import elon from './img/elon.svg'
import maria from './img/maria.jpg'
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
    id: '01',
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
    id: '02',
  },
  {
    author: {
      avatar: elon,
      initials: 'Elon Musk',
    },
    date: '7:41 PM',
    text: 'Ok, just do it',
    id: '03',
  },
  {
    author: {
      avatar: maria,
      initials: 'Я',
    },
    date: '7:41 PM',
    text: 'Hi First name, I need some time for creating study peport. 3 hours for everything',
    id: '04',
  },
]

let URL: string = 'wss://ws.qexsystems.ru'

function Chat() {
  const [messages, setMessages] = useState<MessageType[]>(INITIAL_MESSAGE)
  const [ws, setWs] = useState(new WebSocket(URL))

  const updateMessages = (allMessages: MessageType[]) => {
    ws.send(JSON.stringify(allMessages))
    setMessages(allMessages)
  }

  useEffect(() => {
    ws.onopen = () => {
      console.log('WebSocket Connected')
    }

    ws.onmessage = (e) => {
      const message = JSON.parse(e.data)
      setMessages([...messages, message])
    }

    return () => {
      ws.onclose = () => {
        console.log('WebSocket Disconnected')
        setWs(new WebSocket(URL))
      }
    }
  }, [ws.onmessage, ws.onopen, ws.onclose, messages])

  console.log(messages)
  return (
    <div className="Chat">
      <ChatHeader user={user} />
      <Messages messages={messages} />
      <ChatFooter messages={messages} onUpdateMessages={updateMessages} />
    </div>
  )
}

export { Chat }
