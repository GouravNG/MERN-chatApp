import jwt from "jsonwebtoken"
import { User } from "../models/userModel.mjs"
export const protectSend = async (req, res, next) => {
    try {
        //user is logged in or not by checking the token
        const token = req.cookies.JWT
        if (!token) return res.status(401).json({ error: "Unauthorized - No Token provided" })

        //validate the token
        const decode = jwt.verify(token, process.env.JWTsecret)
        if (!decode) return res.status(401).json({ error: "Unauthorized - Invalid Token" })

        //find the user and add to request
        const userFound = await User.findById(decode.userId).select("-password")
        if (!userFound) return res.status(404).json({ error: "User Not found" })

        req.sender = userFound
        //next
        next()
    } catch (error) {
        console.log(error)
        res.status(500).json({ messaage: "internal server error" })
    }
}