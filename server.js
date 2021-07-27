const express = require('express');
require('./dataBase/connect');
const user = require('./CollectionSchema/User');
const { json } = require('body-parser');

const app = express();


app.use(json());
const port = process.env.PORT || 5000;

// app.get('/',(req,res)=>{
//     res.send("this is from server side");
// })

app.post('/user_signUp', (req, res) => {
    const { Fname, Lname, email, password, number } = req.body;
    console.log(req.body);
   
    const newUser = new user({ Fname, Lname, email, password, number });
    newUser.save((err, data) => {
        if (data) {
            res.status(200).json({ message: "data is saved" })
        } else {
            res.status(400).json({ message: "data is not saved" })
        }
    })

})

if (process.env.NODE_ENV == "production") {
    app.use(express.static("guvi-app/build"));
}
app.listen(port, () => {
    console.log(`server is running on port number ${port}`)
})
