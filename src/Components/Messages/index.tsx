import React from 'react'
import './style.scss'
import { AVATAR_SIZE, UserPhoto } from '../UserPhoto'
import { MessageType } from './types'

interface MessageProps {
  messages: MessageType[]
}

const Messages = ({ messages }: MessageProps) => {
  return (
    <div className="Messages">
      {messages.map((item) => {
        return (
          <div className="Messages__message">
            <div className="Messages__message-icon">
              <UserPhoto user={item.author} size={AVATAR_SIZE.MEDIUM} />
            </div>
            <div className="Messages__message-content">
              <div className="Messages__message-title">
                {item.author.initials}
              </div>
              <span className="Messages__message-text">
                {item.text}
                <span className="Messages__message-time">{item.date}</span>
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export { Messages }
