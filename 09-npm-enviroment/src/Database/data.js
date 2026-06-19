async function connectToDatabase(user, password) {
    if (user === "Pedro" && password === "123") {
        console.log("Conectado com o banco de dados!")
    } else {
        console.log("Falha no login! Erro nos dados.")
    }
}

export default connectToDatabase;