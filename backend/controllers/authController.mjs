import { User } from "../models/userModel.mjs"
export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirPassWord, gender } = req.body

        if (password !== confirPassWord) return res.status(400).json({ error: "Password don't match" })
        if (await User.findOne({ username: userName })) return res.status(400).json({ error: "userrName already taken" })

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const createdUser = new User({
            fullName,
            username: userName,
            password,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })
        const newUserData = await createdUser.save()
        res.status(200).json(newUserData)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ "message": "internal server error" })
    }
}
export const login = (req, res) => {
    res.send("login Page")
}
export const logout = (req, res) => {
    res.send("logout Page")
}