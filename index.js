const express = require('express');
require('dotenv').config();
const graphqlHTTP = require('express-graphql');
const mongo = require('mongoose');
const app = express();

const connectDB = require("./config/db");
//const gauth = require("./config/gauth");

connectDB();
app.use('/graphiql', graphqlHTTP({ schema: require('./schema.js'), graphiql: true}));

app.listen(8080, () => {
    console.log('Server running succefully...')
})

// require("dotenv").config();
// const express = require("express");
// const connectDB = require("./config/db");
// //const gauth = require("./config/gauth");

// connectDB();
// //gauth();

// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({ message: "API running..." });
// });


// const PORT = process.env.PORT || 5000;

// const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// process.on("unhandledRejection",(err)=>{
//   console.log(`error:${err}`);
//   server.close(()=> process.exit(1));
// })
