const { buildSchema } = require('graphql');

module.exports = buildSchema(`

type Message {
  _id: ID!
  author: String!
  message: String!
  date: String!
  salle: String!
}
type Salle {
  _id: ID!
  name: String
  date: String!
}

type User {
  _id: ID!
  email: String!
  password: String!
}

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}

input SalleInput {
  name: String!
}

input MessageInput {
  author: String!
  message: String!
  salle: String!
}


input UserInput {
  email: String!
  password: String!
}

type RootQuery {
    salles: [Salle!]!
    messages(salle: String!): [Message!]!
    users: [User!]!
    login(email: String!, password: String!): AuthData!
}

type RootMutation {
    createSalle(salleInput: SalleInput): Salle
    createMessage(messageInput: MessageInput): Message
    createUser(userInput: UserInput): User
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
