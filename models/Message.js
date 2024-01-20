import mongoose from "mongoose"

const MessageSchema = new mongoose.Schema({
  chat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chat",
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },  
  text: {
    type: String,
    default: "",
  },
  photo: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  seenBy: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    default: []
  }
})

const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema)

export default Message