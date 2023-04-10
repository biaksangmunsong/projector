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
            socket.broadcast.emit("set-lyrics-current-line", line, songId)
        }
        catch {}
    })
    
}