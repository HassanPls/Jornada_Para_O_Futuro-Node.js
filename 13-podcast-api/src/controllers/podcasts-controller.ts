import {IncomingMessage, ServerResponse} from "http";
import { serviceListEpisodes } from "../services/list-episodes-service"
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import type { ResponsePodcastModel } from "../models/response-podcast-model";

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content: ResponsePodcastModel = await serviceListEpisodes();

    res.writeHead(content.statusCode, {'content-type': "application/json"});
    res.write(JSON.stringify(content.body));

    res.end();
}

export const getFilterEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content: ResponsePodcastModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, {'content-type': "application/json"});
    res.write(JSON.stringify(content.body));
    
    res.end();
}