const databaseType = {
    userType: "admin",
    typeData: "datalocal"
}

async function connectoToDatabase(dataname) {
    console.log(`conectado ao banco ${dataname}`);
}

async function disconnectDatabase(dataname) {
    console.log(`desconectando do banco ${dataname}`)
}

export { connectoToDatabase, disconnectDatabase, databaseType };