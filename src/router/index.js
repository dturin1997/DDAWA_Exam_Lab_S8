import { SongRouter, authRouter, playListRouter } from "../components";

// cada vez que quiera agregar unaruta nueva,
// creo el path e importo el componente
const listRoutes = [["/api/v1/users", authRouter], ["/api/v1/songs", SongRouter], ["/api/v1/playLists", playListRouter]];

export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
