import express from "express"

import { sendMessage } from "../controllers/messagesController.mjs"
import { protectSend } from "../middlewares/protectsend.mjs"
const messageRoute=express.Router()

messageRoute.post("/send/:receiverid",protectSend,sendMessage)

export default messageRoute