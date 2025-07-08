declare interface SessionObject {
  login: {
    access_token: string
    refresh_token: string
  }
}

declare interface UserDTO {
  myProfile: {
    id: string
    name: string
    avatar: string
  }
}

declare interface User {
  id: string
  name: string
  avatar: string
}
