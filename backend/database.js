// Imports
const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config()

// Mongo Atlas URI
const ATLAS_URI = `mongodb+srv://${process.env.ATLAS_USERNAME}:${process.env.ATLAS_PASSWORD}@cluster0.fhmyzu4.mongodb.net/${process.env.ATLAS_DBNAME}`

// Connection Setup
mongoose.connect(uri=ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log('Database Successfully Connected!')
}).catch((err)=>{
    console.log(err)
})

const db = mongoose.connection;

// export 
module.exports = {
    db
}