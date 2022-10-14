import Song from "../../models/song"

export const findAll = async (req, res) => {
    try{
        const songs = await Song.find();

    res.json({
        ok: true,
        data: songs,
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
   const song = new Song(body);
   song.save();
 
   res.json({
     ok: true,
     data: song,
   });
 } catch (error) {
   res.json({
     ok: false,
     data: error.message,
   });
 }
};

export const findOne = async (req, res) => {
    try{
        const { id } = req.params
        const songs = await Song.findOne({_id:id});
        res.json({
            ok: true,
            data: songs,
        });
    }
    catch (error) {
        res.json({
          ok: false,
          data: error.message,
        });
      }
};
