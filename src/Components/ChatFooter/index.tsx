import React, { useState } from 'react'
import './style.scss'
import vectorInacteve from './img/vectorInacteve.svg'
import vectorActive from './img/vectorActive.svg'
import { MessageType, UserType } from '../Message/types'

type ChatFooterType = {
  user: UserType
}

const ChatFooter = ({ user }: ChatFooterType) => {
  const [message, setMessage] = useState<MessageType>({
    id: '',
    text: '',
    date: '',
    author: user,
  })

  const handleTextAreaHeight = (event: any) => {
    event.target.style.height = 'auto'
    event.target.style.height = event.target.scrollHeight + 'px'
  }

  const handleComment = (
    newId: string,
    newMessage: string,
    newDate: string
  ) => {
    setMessage({
      id: newId,
      text: newMessage,
      date: newDate,
      author: message.author,
    })
  }

  const createMessage = () => {
    if (message.text.trim() !== '') {
      setMessage({
        id: message.id,
        text: message.text,
        date: new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
        }),
        author: message.author,
      })
    }
  }

  return (
    <div className="ChatFooter">
      <textarea
        autoFocus={true}
        rows={1}
        className="ChatFooter__enter-text-message"
        placeholder="Enter text message..."
        onChange={(event) => {
          handleTextAreaHeight(event)
          handleComment(
            Date.now().toString(),
            event.target.value,
            new Date().toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
            })
          )
        }}
      />
      <img
        alt="vector"
        className={
          message.text.trim() !== ''
            ? 'ChatFooter__enter-text-message-icon'
            : ''
        }
        src={message.text.trim() === '' ? vectorInacteve : vectorActive}
        onClick={createMessage}
      />
    </div>
  )
}

export { ChatFooter }
