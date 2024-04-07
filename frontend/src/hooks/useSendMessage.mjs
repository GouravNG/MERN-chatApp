export const useSendMessage = () => {
    const sendMessage = async (messageTobeSend,id) => {
        try {
            console.log(messageTobeSend)
            const data = await fetch(`/api/message/send/${id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body:JSON.stringify({"message":messageTobeSend})
            })
            const newData = await data.json()
            if (newData.error) throw new Error(newData.error)
            console.log(newData)
        }
        catch (err) {
            console.error(err.message)
        }
    }
    return sendMessage
}