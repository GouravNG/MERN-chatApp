import express from "express"
import { login, logout, signup } from "../controllers/authController.mjs"

const authRoute = express.Router()

authRoute.post("/signup", signup)
authRoute.post("/login", login)
authRoute.get("/logout", logout)
export default authRoute