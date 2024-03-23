import express from "express"
import dotenv from "dotenv"
import cookieparser from "cookie-parser"

import authRoute from "./routes/authRoutes.mjs"
import messageRoute from "./routes/messaagesRoute.mjs"
import { MongoConnection } from "./db/connection.mjs"

const PORT = process.env.PORT || 3000
const app = express()

dotenv.config()

app.use(express.json())
app.use(cookieparser())
app.use("/api/auth", authRoute)
app.use("/api/message",messageRoute)

app.get("/", (req, res) => {
    res.redirect("/api/auth/signup")

})


app.use((req, res, next) => {
    res.send("404")

})
app.use((err, req, res, next) => {
    res.send("500")
    console.log(err)
})
app.listen(PORT, () => {
    console.log(`Server runnig on PORT ${PORT}...`)
    MongoConnection()
})