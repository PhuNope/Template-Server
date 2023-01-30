import mongoose from "mongoose";

const Player = new mongoose.Schema({
    name: String,
    content: String,
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Player", Player);