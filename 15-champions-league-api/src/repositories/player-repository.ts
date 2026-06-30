import { PlayerModel, PlayerStatistics } from "../models/player-model";

const database: PlayerModel[] = [
    {
        id: 19,
        name: "David Beckham",
        club: "Retired",
        nationality: "England",
        position: "Midfielder",
        statistics: {
            Overall: 85,
            Pace: 76,
            Shooting: 82,
            Passing: 90,
            Dribbling: 84,
            Defending: 70,
            Physical: 72
        }
    },
    {
        id: 10,
        name: "Ronaldinho Gaúcho",
        club: "Retired",
        nationality: "Brazil",
        position: "Attacking Midfielder",
        statistics: {
            Overall: 93,
            Pace: 92,
            Shooting: 88,
            Passing: 91,
            Dribbling: 97,
            Defending: 38,
            Physical: 79
        }
    },
    {
        id: 7,
        name: "Cristiano Ronaldo",
        club: "Al-Nassr",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            Overall: 86,
            Pace: 77,
            Shooting: 88,
            Passing: 75,
            Dribbling: 80,
            Defending: 34,
            Physical: 74
        }
    },
    {
        id: 30,
        name: "Lionel Messi",
        club: "Inter Miami",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 88,
            Pace: 75,
            Shooting: 87,
            Passing: 90,
            Dribbling: 92,
            Defending: 33,
            Physical: 64
        }
    },
    {
        id: 9,
        name: "Ronaldo Nazário",
        club: "Retired",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            Overall: 94,
            Pace: 97,
            Shooting: 93,
            Passing: 80,
            Dribbling: 95,
            Defending: 44,
            Physical: 85
        }
    },
    {
        id: 5,
        name: "Zinedine Zidane",
        club: "Retired",
        nationality: "France",
        position: "Midfielder",
        statistics: {
            Overall: 91,
            Pace: 75,
            Shooting: 84,
            Passing: 92,
            Dribbling: 91,
            Defending: 65,
            Physical: 76
        }
    },
    {
        id: 14,
        name: "Thierry Henry",
        club: "Retired",
        nationality: "France",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 94,
            Shooting: 88,
            Passing: 82,
            Dribbling: 89,
            Defending: 41,
            Physical: 77
        }
    },
    {
        id: 8,
        name: "Kaká",
        club: "Retired",
        nationality: "Brazil",
        position: "Attacking Midfielder",
        statistics: {
            Overall: 89,
            Pace: 91,
            Shooting: 84,
            Passing: 86,
            Dribbling: 89,
            Defending: 42,
            Physical: 72
        }
    },
    {
        id: 4,
        name: "Sergio Ramos",
        club: "Free Agent",
        nationality: "Spain",
        position: "Defender",
        statistics: {
            Overall: 83,
            Pace: 70,
            Shooting: 63,
            Passing: 71,
            Dribbling: 70,
            Defending: 83,
            Physical: 84
        }
    },
    {
        id: 1,
        name: "Manuel Neuer",
        club: "Bayern Munich",
        nationality: "Germany",
        position: "Goalkeeper",
        statistics: {
            Overall: 87,
            Pace: 55,
            Shooting: 48,
            Passing: 85,
            Dribbling: 50,
            Defending: 43,
            Physical: 80
        }
    }
]

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
}

export const findPlayerById = async (id:number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id == id);
}

export const insertPlayer = async (player:PlayerModel) => {
    database.push(player);
}

export const deletePlayer = async (id:number) => {
    const index = database.findIndex(p => p.id == id);
    if (index != -1) {
        database.splice(index, 1);
    }
}

export const updatePlayer = async (id:number, statistics: PlayerStatistics) => {
    const index = database.findIndex(p => p.id == id);
    if (index != -1) {
        database[index].statistics = statistics;
    }
}