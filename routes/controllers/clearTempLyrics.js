const fs = require("fs")
const path = require("path")

module.exports = async (req, res, next) => {

    try {
        fs.writeFileSync(path.join(process.cwd(), "_content", "temp_lyrics.json"), JSON.stringify([]))
        
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