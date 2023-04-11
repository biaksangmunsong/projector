const fs = require("fs")
const path = require("path")

module.exports = async (req, res, next) => {

    try {
        const id = req.body.id

        const notifications = JSON.parse(fs.readFileSync(path.join(process.cwd(), "_content", "notifications.json")))

        const newList = notifications.filter(n => n.id !== id)
        
        fs.writeFileSync(path.join(process.cwd(), "_content", "notifications.json"), JSON.stringify(newList))
        
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