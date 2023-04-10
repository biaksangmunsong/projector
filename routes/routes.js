const express = require("express")
const router = express.Router()

// import routes
const addLyrics = require("./controllers/addLyrics")
const deleteLyrics = require("./controllers/deleteLyrics")
const addTempLyrics = require("./controllers/addTempLyrics")
const deleteTempLyrics = require("./controllers/deleteTempLyrics")
const clearTempLyrics = require("./controllers/clearTempLyrics")
const getTempLyrics = require("./controllers/getTempLyrics")

router.get("/", (req, res, next) => {
    res.send("Hello")
})
router.post("/add-lyrics", addLyrics)
router.post("/delete-lyrics", deleteLyrics)
router.post("/add-temp-lyrics", addTempLyrics)
router.post("/delete-temp-lyrics", deleteTempLyrics)
router.post("/clear-temp-lyrics", clearTempLyrics)
router.get("/get-temp-lyrics", getTempLyrics)

module.exports = router