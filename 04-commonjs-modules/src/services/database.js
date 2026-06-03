exports.connectToDatabase = async (dataName) => {
    console.log("Se conectando ao banco: " + dataName);
}

exports.disconnectDatabase = () => {
    console.log("Se desconectando...");
}