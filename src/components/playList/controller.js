import PlayList from "../../models/playList"
import Song from "../../models/song"

export const findAll = async (req, res) => {
    try{
        const playList = await PlayList.find();

    res.json({
        ok: true,
        data: playList,
      });

    } catch (error) {
      res.json({
        ok: false,
        data: error.message,
      });
    }
};

export const create = async (req, res) => {
  try {
   const { body } = req;
   const playList = new PlayList(body);
   playList.save();
 
   res.json({
     ok: true,
     data: playList,
   });
 } catch (error) {
   res.json({
     ok: false,
     data: error.message,
   });
 }
};

export const playListById = async (req,res) => {
    try {
        const { id } = req.params;
        const playlist = await PlayList.findById(id);
        
        console.log(playlist)
        console.log(playlist.songs.toString())
        console.log(typeof(playlist.songs.toString()))

        const song = await Song.findById(playlist.songs.toString())
        delete playlist.songs
        playlist.songs = song
        res.json({
            ok: true,
            data: playlist,
          });
    } catch (error) {
        return res.json({
            error: error
        })
    }
 }

