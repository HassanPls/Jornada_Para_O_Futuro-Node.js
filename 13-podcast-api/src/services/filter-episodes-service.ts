import type { ResponsePodcastModel } from "../models/response-podcast-model";
import { repoPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (reqUrl: string | undefined): Promise<ResponsePodcastModel> => {
    
    let responseFormat: ResponsePodcastModel = {
        statusCode: 0,
        body: [],
    }

    const queryString = reqUrl?.split("?p=")[1] || "";
    const data = await repoPodcast(queryString);

    if (data.length !== 0) {
        responseFormat.statusCode = StatusCode.OK
    } else {
        responseFormat.statusCode = StatusCode.NoContent
    }

    responseFormat.body = data;

    return responseFormat;
}