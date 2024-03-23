import { Conversation } from "../models/conversationModel.mjs"
import { Message } from "../models/messagesModel.mjs"
export const sendMessage = async (req, res) => {
    try {
        //getting the required things i.e senderid , receiver id, and messaage
        const senderId = req.sender._id
        const receiverId = req.params.receiverid
        const messageSent = req.body.message
        //find the conversation between those user
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })
        //if not found create new covnersation and add those ids
        if (!conversation) {
            const newConversation = new Conversation({
                participants: [senderId, receiverId]
            })
            newConversation.save()
        }
        //if found add message to that 
        const newMessage = new Message({
            senderId: senderId,
            receiverId: receiverId,
            message: messageSent
        })
        if (newMessage)
            conversation.messaages.push(newMessage._id)
        await Promise.all([conversation.save(), newMessage.save()])
        //give responce back
        res.status(201).json(newMessage)
    } catch (error) {
        console.log("Error in sendMessage", error)
        res.status(500).json({ error: "Interval server error" })
    }

}

export const getMessage = async (req, res) => {
    try {
        //retrive the messages from teh db for th logger in user and chat user
        //get fileds
        const userToChat = req.params.id
        const loggedUser = req.sender._id
        //send fields 
        //find their conversation
        const theirConversation = await Conversation.findOne({
            participants: { $all: [userToChat, loggedUser] }
        }).populate("messaages")
        //find the message and send to them
        if (!theirConversation) return res.status(200).json([])
        const theirMessages = theirConversation.messaages
        res.status(200).json(theirMessages)
    }
    catch (error) {
        console.log("Error in getMessge", error)
        res.status(500).json({ error: "Internal Server Error" })
    }
}