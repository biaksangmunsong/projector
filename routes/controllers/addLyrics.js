const fs = require("fs")
const path = require("path")

module.exports = async (req, res, next) => {

    try {
        const title = req.body.title
        const lyrics = req.body.lyrics
        const id = req.body.id

        const storedLyrics = JSON.parse(fs.readFileSync(path.join(process.cwd(), "_content", "lyrics.json")))

        const dup = storedLyrics.filter(lrcs => lrcs.id === id)
        if (dup.length){
            return next({
                status: 409,
                data: {
                    message: "Duplicate lyrics"
                }
            })
        }

        const newLyrics = [{
            id,
            title,
            lyrics
        }, ...storedLyrics]
        
        fs.writeFileSync(path.join(process.cwd(), "_content", "lyrics.json"), JSON.stringify(newLyrics))
        
        res
        .status(200)
        .set("Cache-Control", "no-store")
        .send("OK")
    }
    catch (err){
        console.log(err)
        next({
            status: 500,
            data: {
                message: "Internal Server Error"
            }
        })
    }

}