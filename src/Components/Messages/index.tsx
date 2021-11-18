import React from 'react'
import './style.scss'
import { AVATAR_SIZE, UserPhoto } from '../UserPhoto'
import { MessageType } from './types'

interface MessageProps {
  messages: MessageType[]
}

const Messages = ({ messages }: MessageProps) => {
  return (
    <div>
      {messages.map((item) => {
        return (
          <div className="Message">
            <div className="Message__icon">
              <UserPhoto user={item.author} size={AVATAR_SIZE.MEDIUM} />
            </div>
            <div className="Message__content">
              <div className="Message__title">{item.author.initials}</div>
              <span className="Message__text">
                {item.text}
                <span className="Message__time">{item.date}</span>
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export { Messages }
