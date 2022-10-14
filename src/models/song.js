import mongoose from "mongoose";

const songSchema = mongoose.Schema({
    name: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String, required: true },
    duration: { type: Number, required: true, default: 0 },
});

export default mongoose.model("Song", songSchema);