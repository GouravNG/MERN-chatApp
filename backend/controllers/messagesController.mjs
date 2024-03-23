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