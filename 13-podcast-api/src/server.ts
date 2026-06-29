import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {

    const baseUrl = req.url?.split("?")[0];

    if (req.method === HttpMethod.GET && baseUrl === Routes.LIST) {
      await getListEpisodes(req, res);
    }

    if (req.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
      await getFilterEpisodes(req, res);
    }
  },
);

server.listen(process.env.PORT, () => {
  console.log(`Servidor iniciado na porta ${process.env.PORT}.`);
});
