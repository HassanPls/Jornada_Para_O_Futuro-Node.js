import { PlayerModel, PlayerStatistics } from "../models/player-model";
import {
  deletePlayer,
  findAllPlayers,
  findPlayerById,
  insertPlayer,
  updatePlayer,
} from "../repositories/player-repository";
import { badRequest, created, noContent, ok } from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await findAllPlayers();
  let response = null;

  if (!data) {
    response = await noContent();
  } else {
    response = await ok(data);
  }
  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerById(id);

  let response = null;

  if (!data) {
    response = await noContent();
  } else {
    response = await ok(data);
  }
  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;
  if (Object.keys(player).length !== 0) {
    await insertPlayer(player);
    response = await created();
  } else {
    response = await badRequest();
  }
  return response;
};

export const deletePlayerService = async (id: number) => {
  await deletePlayer(id);
  let response = await ok({ message: "Deletado"});
  return response;
};

export const updatePlayerService = async (id:number, statistics: PlayerStatistics) => {
  await updatePlayer(id, statistics);
  let response = await ok({ message: "Updated"});
  return response;
}