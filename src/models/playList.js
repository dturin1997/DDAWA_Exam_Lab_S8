import mongoose from "mongoose";


const playListSchema = mongoose.Schema({
    name: { type: String, required: true },
    userId: { type: String, required: true },
    songs: { type: mongoose.Schema.Types.ObjectId, ref: 'Song' },
});

export default mongoose.model("PlayList", playListSchema);
/*
const storySchema = mongoose.Schema({
    caption: { type: String, required: true },
    username: { type: String, required: true },
    userId: { type: String, required: true },
    //userId: { type: String },
    image: { type: String, required: true },
    tags: String,
    //likes: { type: Number, default: 0 },
    likes: { type: [String], default: [] },
    postDate: { type: Date, default: new Date() },
});
*/

