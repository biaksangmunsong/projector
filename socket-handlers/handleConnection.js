module.exports = async (io, socket) => {

    socket.on("reload-page", () => {
        try {
            socket.broadcast.emit("reload-page")
        }
        catch {}
    })

    socket.on("set-current-slide", (slide, data) => {
        try {
            socket.broadcast.emit("set-current-slide", slide, data)
        }
        catch {}
    })

    socket.on("exit-slide", () => {
        try {
            socket.broadcast.emit("exit-slide")
        }
        catch {}
    })

    socket.on("set-lyrics-current-line", (line, songId) => {
        try {
            io.emit("set-lyrics-current-line", line, songId)
        }
        catch {}
    })

    socket.on("set-programme-index", i => {
        try {
            io.emit("set-programme-index", i)
        }
        catch {}
    })

    socket.on("check-connection-status", () => {
        try {
            socket.broadcast.emit("check-connection-status")
        }
        catch {}
    })
    
}