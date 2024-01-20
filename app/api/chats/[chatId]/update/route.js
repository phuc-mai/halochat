import Chat from "@models/Chat"
import { connectToDB } from "@mongodb"

export const POST = async (req, { params }) => {
  try {
    await connectToDB()

    const body = await req.json()

    const { chatId } = params

    const { name, groupPhoto } = body

    const updatedGroupChat = await Chat.findByIdAndUpdate(
      chatId,
      { name, groupPhoto },
      { new: true }
    )

    return new Response(JSON.stringify(updatedGroupChat), { status: 200 })
  } catch (err) {
    return new Response("Failed to update group chat info", { status: 500 })
  }
}