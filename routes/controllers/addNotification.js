const fs = require("fs")
const path = require("path")

module.exports = async (req, res, next) => {

    try {
        const title = req.body.title
        const body = req.body.body
        const id = req.body.id

        const notifications = JSON.parse(fs.readFileSync(path.join(process.cwd(), "_content", "notifications.json")))

        const dup = notifications.filter(n => n.id === id)
        if (dup.length){
            return next({
                status: 409,
                data: {
                    message: "Duplicate notification"
                }
            })
        }

        const newList = [{
            id,
            title,
            body
        }, ...notifications]
        
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