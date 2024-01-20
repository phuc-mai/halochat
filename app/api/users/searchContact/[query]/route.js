import User from "@models/User"
import { connectToDB } from "@mongodb"

export const GET = async (req, { params }) => {
  try {
    await connectToDB()

    const { query } = params

    const searchedContacts = await User.find({
      $or: [
        { username: { $regex: query, $options: "i" } },
        { email: { $regex: query, $options: "i" } }
      ]
    })

    return new Response(JSON.stringify(searchedContacts), { status: 200 })
  } catch (err) {
    return new Response("Failed to search contact", { status: 500 })
  }
}