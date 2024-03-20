import express from "express"
import dotenv from "dotenv"

import authRoute from "./routes/authRoutes.mjs"
import { MongoConnection } from "./db/connection.mjs"

const PORT = process.env.PORT || 3000
const app = express()

dotenv.config()

app.use(express.json())
app.use("/api/auth", authRoute)

app.get("/", (req, res) => {
    res.send("hello")

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