import express from "express"
import { getUsers } from "../controllers/userController.mjs"
import { protectSend } from "../middlewares/protectsend.mjs"
const userRoute = express.Router()

userRoute.get("/", protectSend, getUsers)

export default userRoute