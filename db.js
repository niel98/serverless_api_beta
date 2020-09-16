const mongoose = require('mongoose')

const MONGO_URI = 'mongodb+srv://user123:user123@cluster0.p7fsi.mongodb.net/users?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        const conn = mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`${conn}: MongoDb connected`)

    } catch (err) {
        console.log(err.message)
    }

}

module.exports = connectDB