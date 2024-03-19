import expres from "express"
import dotenv from "dotenv"

import authRoute from "./routes/authRoutes.mjs"

dotenv.config()

const PORT = process.env.PORT || 3000
const app = expres()

app.get("/", (req, res) => {
    res.send("hello")

})
app.use("/api/auth", authRoute)

app.use((req, res, next) => {
    res.send("404")

})
app.use((err, req, res, next) => {
    res.send("500")
})
app.listen(PORT, () => {
    console.log(`Server runnig on PORT ${PORT}...`)
})