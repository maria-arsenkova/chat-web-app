import React, { useState } from 'react'
import './style.scss'
import vectorInacteve from './img/vectorInacteve.svg'
import vectorActive from './img/vectorActive.svg'
import { MessageType, UserType } from '../Messages/types'

type ChatFooterType = {
  messages: MessageType[]
  onUpdateMessages: (messages: MessageType[]) => void
}

const ChatFooter = ({ messages, onUpdateMessages }: ChatFooterType) => {
  const [message, setMessage] = useState<MessageType>({
    id: '',
    text: '',
    date: '',
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
      })
      updateMessages(message, messages)
    }
  }

  const updateMessages = (
    newMessage: MessageType,
    allMessages: MessageType[]
  ) => {
    console.log(newMessage)
    console.log(allMessages)
    const newMessages: MessageType[] = [...allMessages, newMessage]
    onUpdateMessages(newMessages)
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
