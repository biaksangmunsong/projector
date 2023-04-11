const fs = require("fs")
const path = require("path")

module.exports = async (req, res, next) => {

    try {
        const programme = JSON.parse(fs.readFileSync(path.join(process.cwd(), "_content", "programme.json")))
        
        res
        .status(200)
        .set("Cache-Control", "no-store")
        .json(programme)
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