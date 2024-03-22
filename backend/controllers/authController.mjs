import bcrypt from "bcrypt"
import { User } from "../models/userModel.mjs"
import { generateTokenAndSetCookie } from "../utils/Jwt.mjs"
export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirPassWord, gender } = req.body

        if (password !== confirPassWord) return res.status(400).json({ error: "Password don't match" })
        if (await User.findOne({ username: userName })) return res.status(400).json({ error: "userrName already taken" })

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const createdUser = new User({
            fullName,
            username: userName,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })
        if (createdUser) {
            const newUserData = await createdUser.save()
            generateTokenAndSetCookie({ userName }, res)
            res.status(201).json(newUserData)
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ "message": "internal server error" })
    }
}
export const login = async (req, res) => {
    try {
        const { userName, password } = req.body

        const userFound = await User.findOne({ username: userName })
        if (!userFound) return res.status(400).json({ error: "Username or password is wrong" })

        const passwordCompare = await bcrypt.compare(password, userFound.password)
        if (!passwordCompare) return res.status(400).json({ error: "Username or password is wrong" })
        generateTokenAndSetCookie(userFound._id, res)
        res.status(200).json({
            _id: userFound._id,
            fullName: userFound.fullName,
            userName: userFound.username,
            profilePic: userFound.profilePic
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).send("Something went wrong")
    }
}
export const logout = (req, res) => {
    try {
        res.cookie("JWT", "", { maxAge: 0 })
        res.status(200).json({ message: "Logout successfull" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" })
    }
}