export type UserType = {
  avatar: string
  initials: string
}

export type MessageType = {
  type: 'message'
  author: UserType
  date: string
  text: string
  id: string
}
