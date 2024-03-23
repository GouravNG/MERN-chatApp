import { User } from "../models/userModel.mjs"

export const getUsers = async (req, res) => {
    try {
        const loggeduser = req.sender._id
        const allUser = await User.find({})
        res.status(200).json(allUser)
    } catch (error) {
        console.log("error in user controller", error)
        res.status(500).json({ error: "Internal server Error" })
    }
}