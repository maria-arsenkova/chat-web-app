import React, { useState, useEffect } from 'react'
import './style.scss'
import elon from './img/elon.jpg'
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
    type: 'message',
    author: {
      avatar: elon,
      initials: 'Elon Musk',
    },
    date: '7:41 PM',
    text: 'Hi John, what do you think about corporate messengers? I know some new apps on UC market',
    id: '01',
  },
  {
    type: 'message',
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
    type: 'message',
    author: {
      avatar: elon,
      initials: 'Elon Musk',
    },
    date: '7:41 PM',
    text: 'Ok, just do it',
    id: '03',
  },
  {
    type: 'message',
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
  const [messages, setMessages] = useState<MessageType[]>([])
  const [ws, setWs] = useState(new WebSocket(URL))
  const [status, setStatus] = useState('')

  useEffect(() => {
    updateMessages()
  }, [])

  const updateMessages = () => {
    const collection = localStorage.getItem('allMessages')
    if (collection != null) {
      setMessages(JSON.parse(collection))
    } else {
      localStorage.setItem('allMessages', JSON.stringify(INITIAL_MESSAGE))
      setMessages(INITIAL_MESSAGE)
    }
  }

  const onMessagesUpdate = (allMessages: MessageType[]) => {
    ws.send(JSON.stringify(allMessages))
    localStorage.setItem('allMessages', JSON.stringify(allMessages))
    updateMessages()
  }

  useEffect(() => {
    ws.onopen = () => {
      setStatus('online')
      console.log('WebSocket Connected')
    }

    ws.onmessage = (e) => {
      const message = JSON.parse(e.data)
      if (message.type === 'message') {
        setMessages([...messages, message])
        localStorage.setItem(
          'allMessages',
          JSON.stringify([...messages, message])
        )
      }
    }

    return () => {
      ws.onclose = (event) => {
        console.log('WebSocket Disconnected')
        setStatus('offline')
        const collection = localStorage.getItem('allMessages')
        if (collection != null) {
          setMessages(JSON.parse(collection))
        }
        setWs(new WebSocket(URL))
      }
    }
  }, [ws.onmessage, ws.onopen, ws.onclose, messages])

  return (
    <div className="Chat">
      <ChatHeader user={user} />
      {status === 'offline' ? alert('Нет соединения сообщения не будут отправлены') : null}
      <Messages messages={messages} />
      <ChatFooter messages={messages} onMessagesUpdate={onMessagesUpdate} />
    </div>
  )
}

export { Chat }
