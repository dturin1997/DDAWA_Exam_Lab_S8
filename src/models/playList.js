import mongoose from "mongoose";


const playListSchema = mongoose.Schema({
    name: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true },
    songs: { type: mongoose.Schema.Types.ObjectId, ref: 'Song', required:true },
});

export default mongoose.model("PlayList", playListSchema);


