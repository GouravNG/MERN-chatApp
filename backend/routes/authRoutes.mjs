import express from "express"
import { login, logout, signup } from "../controllers/authController.mjs"

const authRoute = express.Router()

authRoute.get("/signup", signup)
authRoute.get("/login", login)
authRoute.get("/logout", logout)
export default authRoute