import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Account {
    id: ID!
    email: String!
    profile: Profile!    
    createdAt: Int!
    updatedAt: Int!
  }

  type Profile {
    id: ID!
    firstname: String!
    lastname: String!
    account: Account!
    createdAt: Int!
    updatedAt: Int!
  }

  type Note {
    id: ID!
    title: String!
    creator: Account!
    participants: [Account!]!
    createdAt: Int!
    updatedAt: Int!
  }

  type User {
    accountId: ID!
    email: String!
    firstname: String!
    lastname: String!
    notes: [Note!]!
  }

  input NoteInput {
    creatorId: ID!
    title: String!
  }

  input RegisterInput {
    email: String!
    firstname: String!
    lastname: String!
  }

  input EditUser {
    accountId: ID!
    email: String
    firstname: String
    lastname: String
  }

  type Query {
    accounts: [Account!]!
    profiles: [Profile!]!
    notes: [Note!]!
    me(id: ID): User!
  }

  type Mutation {
    register(input: RegisterInput): User!
  }
`;

export interface IUser {
  name: string,
  accountId: string,
}
