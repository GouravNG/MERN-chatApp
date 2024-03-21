import jwt from "jsonwebtoken"

export const generateTokenAndSetCookie = (userId, res) => {
    const JWT_Token = jwt.sign({ userId }, process.env.JWTsecret, { expiresIn: "1d" })
    res.cookie("JWT", JWT_Token, {
        maxAge: 5 * 60 * 1000,
        httpOnly: true, // prevent XSS attacks cross-site scripting attacks
        sameSite: "strict", // CSRF attacks cross-site request forgery attacks
        // secure: process.env.NODE_ENV !== "development",
    })

}