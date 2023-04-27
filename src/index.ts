import { EventEmitter } from "./EventEmitter";

type User = { username: string, email: string; }

type EventMap = {
  login: [user: User]
  logout: [username: string]
}

const userAuthEmitter = new EventEmitter<EventMap>()

userAuthEmitter.on('login', (user) => {
  console.log(`User: ${user.username} with email: ${user.email} logged in.`)
})

userAuthEmitter.on('logout', (username) => {
  console.log(`User: ${username} logged out.`)
})

const user: User = {
  email: 'lucas@email.com',
  username: 'Lucas',
}

userAuthEmitter.emit('login', user)

userAuthEmitter.emit('logout', user.username)