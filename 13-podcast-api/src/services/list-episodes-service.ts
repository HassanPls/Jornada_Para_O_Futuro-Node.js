import type { ResponsePodcastModel } from "../models/response-podcast-model";
import { repoPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<ResponsePodcastModel> => {
  let responseFormat: ResponsePodcastModel = {
    statusCode: 0,
    body: [],
  };

  const data = await repoPodcast();

  if (data.length !== 0) {
    responseFormat.statusCode = StatusCode.OK;
  } else {
    responseFormat.statusCode = StatusCode.NoContent;
  }

  responseFormat.body = data;

  return responseFormat;
};
