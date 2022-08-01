import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID
    name: String!
    email: String!
    role: Role!
    isAdmin: Boolean
  }

  type Continent {
    id: ID
    continentName: String!
    country: [Country!]!
    createdAt: DateTime
    updatedAt: DateTime
  }

  type Country {
    id: ID
    countryName: String!
    capitalCity: String!
    continent: Continent!
    continentId: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    continents: [Continent!]!
    continent(id: ID!): Continent!
    countries: [Country!]!
    country(id: ID!): Country!
  }

  input CreateUserInput {
    id: ID
    name: String!
    email: String!
    role: String
  }

  input UpdateUserInput {
    id: ID
    name: String!
  }

  input CreateContinentInput {
    id: ID
    continentName: String!
  }

  input UpdateContinentInput {
    id: ID!
    continentName: String!
  }
  input CreateCountryInput {
    id: ID
    countryName: String!
    capitalCity: String!
    continentId: String!
  }

  input UpdateCountryInput {
    id: ID
    countryName: String!
    capitalCity: String!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(input: UpdateUserInput!): User
    deleteUser(id: ID!): User
    createContinent(input: CreateContinentInput!): Continent
    updateContinent(input: UpdateContinentInput!): Continent
    deleteContinent(id: ID!): Continent
    createCountry(input: CreateCountryInput!): Country
    updateCountry(input: UpdateCountryInput!): Country
    deleteCountry(id: ID!): Country
  }

  enum Role {
    BASIC
    EDITOR
    ADMIN
  }

  scalar DateTime
`;

export default typeDefs;
