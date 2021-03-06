import React, { useState, ChangeEvent } from 'react'
import './style.scss'
import vectorInacteve from './img/vectorInacteve.svg'
import vectorActive from './img/vectorActive.svg'
import { MessageType } from '../Messages/types'
import maria from '../Сhat/img/maria.jpg'

type ChatFooterType = {
  messages: MessageType[]
  onMessagesUpdate: (messages: MessageType[]) => void
}

const ChatFooter = ({ messages, onMessagesUpdate }: ChatFooterType) => {
  const [textareaValue, setTextareaValue] = useState('')
  const [message, setMessage] = useState<MessageType>({
    type: 'message',
    id: '',
    text: '',
    date: '',
    author: { initials: 'Я', avatar: maria },
  })

  // Textarea Field handler
  const handleUserTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value)
  }

  // Reset Textarea Field handler
  const resetTextareaField = () => {
    setTextareaValue('')
  }

  const handleTextAreaHeight = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.style.height = 'auto'
    event.target.style.height = event.target.scrollHeight + 'px'
  }

  const handleMessage = (
    newId: string,
    newMessage: string,
    newDate: string
  ) => {
    setMessage({
      type: 'message',
      id: newId,
      text: newMessage,
      date: newDate,
      author: message.author,
    })
  }

  const createMessage = () => {
    if (message.text.trim() !== '') {
      setMessage({
        type: message.type,
        id: message.id,
        text: message.text,
        date: new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
        }),
        author: message.author,
      })
      updateMessages(message, messages)
      resetTextareaField()
    }
  }

  const updateMessages = (
    newMessage: MessageType,
    allMessages: MessageType[]
  ) => {
    const newMessages: MessageType[] = [...allMessages, newMessage]
    onMessagesUpdate(newMessages)
  }

  return (
    <div className="ChatFooter">
      <textarea
        autoFocus={true}
        value={textareaValue}
        rows={1}
        className="ChatFooter__enter-text-message"
        placeholder="Enter text message..."
        onChange={(event) => {
          handleTextAreaHeight(event)
          handleMessage(
            Date.now().toString(),
            event.target.value,
            new Date().toLocaleTimeString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
            })
          )
          handleUserTextarea(event)
        }}
        onKeyPress={(event) => {
          if (event.key === 'Enter' && !event.shiftKey) {
            createMessage()
            //event.preventDefault()
          }
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
        onClick={() => {
          createMessage()
        }}
      />
    </div>
  )
}

export { ChatFooter }
