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
          <>
            {item.author.initials !== 'Я' ? (
              <div
                className="Messages__message Messages__message_left"
                key={`${item.id}_${item.text}`}
              >
                <div className="Messages__message-icon">
                  <UserPhoto user={item.author} size={AVATAR_SIZE.MEDIUM} />
                </div>

                <div className="Messages__message-content Messages__message-content_background-gray">
                  <div className="Messages__message-title">
                    {item.author.initials}
                  </div>

                  <div className="Messages__message-text">
                    {item.text}
                    <span className="Messages__message-time Messages__message-time_background-green">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="Messages__message Messages__message_right"
                key={`${item.id}_${item.text}`}
              >
                <div className="Messages__message-content Messages__message-content_background-green">
                  <div className="Messages__message-text">
                    {item.text}
                    <span className="Messages__message-time Messages__message-time_background-gray">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </>
        )
      })}
    </div>
  )
}

export { Messages }
