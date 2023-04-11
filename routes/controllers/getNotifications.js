const fs = require("fs")
const path = require("path")

module.exports = async (req, res, next) => {

    try {
        const notifications = JSON.parse(fs.readFileSync(path.join(process.cwd(), "_content", "notifications.json")))
        
        res
        .status(200)
        .set("Cache-Control", "no-store")
        .json(notifications)
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