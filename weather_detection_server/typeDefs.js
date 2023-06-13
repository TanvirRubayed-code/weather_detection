const { gql } = require('apollo-server-express')


const typeDefs = gql`


type User {
    id: ID,
    userName: String,
    email: String,
    phone: String,
    profession: String,
    gender: String,
    birthday: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    country: String,
    imageurl: String
}


type Query {

    getUser(id: ID): User
    
}

`

module.exports = typeDefs