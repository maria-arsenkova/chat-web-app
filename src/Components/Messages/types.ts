export type UserType = {
  avatar: string
  initials: string
}

export type MessageType = {
  author?: UserType
  date: string
  text: string
  id: string
}
