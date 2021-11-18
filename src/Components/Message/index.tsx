import React from 'react'
import './style.scss'
import { AVATAR_SIZE, UserPhoto } from '../UserPhoto'
import { MessageType } from './types'

interface MessageProps {
  message: MessageType[]
}

const Message = ({ message }: MessageProps) => {
  return (
    <div>
      {message.map((item) => {
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

export { Message }
