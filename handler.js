'use strict';
const connectDB = require('./db');
const User = require('./Model')

//Create a user
module.exports.create = async event => {
  try {
    await connectDB()
    const users = await User.create(JSON.parse(event.body))

    return {
      statusCode: 201,
      message: 'new User created successfully!',
      body: JSON.stringify(users)
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Operation Unsuccessful'
    }
  }
}

//Read all users
module.exports.getUsers = async event => {
  try {
    await connectDB()

    const users = await User.find()

    return {
      statusCode: 200,
      message: 'success',
      body: JSON.stringify(users)
    }
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Operation failed'
    }
  }
}

//Get single user
module.exports.getUser = async event => {
  try {
    await connectDB()

    const user = await User.findById(event.pathParameters.id)

    return {
      statusCode: 200,
      message: 'user found',
      body: JSON.stringify(user)
    }
  } catch (err) {
    return {
      statusCode: err.statusCode || 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'No user with that ID'
    }
  }
}

//update User
module.exports.updateUser = async event => {
  try {
    await connectDB()

    const user = await User.findByIdAndUpdate(event.pathParameters.id, event.body)

    return {
      statusCode: 200,
      message: 'User Updated',
      body: JSON.stringify(user)
    }
  } catch (err) {
    return {
      statusCode: err.statusCode || 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Operation failed'
    }
  }
}

//delete User
module.exports.deleteUser = async event => {
  try {
    await connectDB()
    const user = await User.findByIdAndDelete(event.pathParameters.id)

    return {
      statusCode: 200,
      message: 'User removed',
      body: JSON.stringify(user)
    }
  } catch (err) {
    return {
      statusCode: err.statusCode || 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Operation failed'
    }
  }
}