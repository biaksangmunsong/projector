const fs = require("fs")
const path = require("path")

module.exports = async (req, res, next) => {

    try {
        const id = req.body.id

        const storedLyrics = JSON.parse(fs.readFileSync(path.join(process.cwd(), "_content", "temp_lyrics.json")))

        const newLyrics = storedLyrics.filter(lrcs => lrcs.id !== id)
        
        fs.writeFileSync(path.join(process.cwd(), "_content", "temp_lyrics.json"), JSON.stringify(newLyrics))
        
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