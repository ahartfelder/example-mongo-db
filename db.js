const User = require('./models/User')
const mongoose = require('mongoose')
require('dotenv').config()
const { DB_USER, DB_PASS } = process.env


// Connect with MongoDB database
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@users.ebkzrhq.mongodb.net/?retryWrites=true&w=majority`,
  () => console.log('Connected to MongoDB database'),
  e => console.error(e)
)

// Create New User
const create = async () => {
  try {
    const newUser = await User.create({
      name: 'Beltrano',
      age: 32
    })
    console.log('User successfully created')
  } catch (error) {
    console.log(error)
  }
}

// Destroy User
const destroy = async (condition) => {
  try {
    await User.deleteOne(condition)
    console.log('User successfully destroyed')
  } catch (error) {
    console.log(error)
  }
}

// Update User
const update = async (filter, toUpdate) => {
  try {
    await User.updateOne(filter, toUpdate)
    console.log('User successfully updated')
  } catch (error) {
    console.log(error)
  }
}

// Get all Users
const getUsers = async () => {
  try {
    const users = await User.find()
    console.log(users)
  } catch (error) {
    console.log(error)
  }
}

// List all Users
getUsers()

// Create - ({ name: X, age: Y })
// create({ name: 'Mané Garrincha', age: 67 })

// Update - filter, toUpdate - ({ [key]: [value] }, { [key]: [value] })
// update({ name: 'Ciclano }, { age: 27 })

// Destroy - condition - ({ [key]: [value] })
// destroy({ name: 'Beltrano' })
