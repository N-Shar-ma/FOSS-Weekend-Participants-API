
const express = require("express")
const app = express()

app.use(express.json())
app.use(express.static('public'))

const profilesRouter = require("./routes/profiles")

app.use("/profiles", profilesRouter)

app.listen(process.env.PORT || 3000, () => {
    console.log("listening at http://localhost:3000/ in development")
})