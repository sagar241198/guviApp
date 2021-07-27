const mongoose = require('mongoose');
const env = require('dotenv').config();


mongoose.connect(process.env.DATABASE,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
).then(() => {
    console.log("database is connected");
}).catch((err) => {
    console.log("database is not connected");
})
