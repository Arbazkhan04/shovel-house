require("dotenv").config();
require("express-async-wrapper")
const express = require("express");
const cookiesParser = require('cookie-parser')
const connectDb = require('./db/connect.js')
const cors = require('cors')
const { app, server } = require('./socket/index')


// middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiesParser())


// route
app.use('/api/auth', require('./routes/AuthRouter.js'));
app.use('/api/chat', require('./middleware/authentication.js'), require('./routes/ChatsRouter.js'))
//app.use('/api/job', require('./middleware/authentication.js'), require('./routes/JobRouter.js'))
app.use('/api/job', require('./routes/JobRouter.js'))

app.use(require('./middleware/not-found.js'));
app.use(require('./middleware/error-handler.js'));


// server
const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URL);
        console.log('Database connected')
        server.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })   
    }
    catch(err) {
        console.log(err);
    }
}
start()