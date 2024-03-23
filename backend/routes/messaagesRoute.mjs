import express from "express"

import { sendMessage, getMessage } from "../controllers/messagesController.mjs"
import { protectSend } from "../middlewares/protectsend.mjs"
const messageRoute = express.Router()

messageRoute.post("/send/:receiverid", protectSend, sendMessage)
messageRoute.get("/:id", protectSend, getMessage)

export default messageRoute