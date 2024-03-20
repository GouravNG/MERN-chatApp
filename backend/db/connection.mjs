import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

export const MongoConnection = () => {
    try {
        mongoose.connect(process.env.mongoConnectionString)
        console.log("connection to mongodb successfull")
    }
    catch (error) {
        console.log("Problem in connection to database")
        console.log(error)
    }
}