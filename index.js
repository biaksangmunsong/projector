const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const io = require("socket.io")(server, {cors: {origin: "*"}})
const routes = require("./routes/routes")
const handleSocketConnection = require("./socket-handlers/handleConnection")

const PORT = process.env.PORT || 8080

// apply middlewares
app.use(express.json({limit: "50mb"}))
app.use(express.urlencoded({limit: "50mb", extended: true}))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    next()
})

// handle static files
app.use(express.static("public"))

// handle routes
app.use("/api", routes)

// handle errors
app.use((err, req, res, next) => {
    if (err){
        res
        .status(err.status)
        .set("Cache-Control", "no-store")
        .json(err.data)
    }
    else {
        res.end()
    }
})

// listen to port
server.listen(PORT, () => {
    console.log(`Server running at port ${PORT}...`)
    
    io.on("connection", socket => handleSocketConnection(io, socket))
})