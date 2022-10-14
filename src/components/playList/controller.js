import PlayList from "../../models/playList"

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

