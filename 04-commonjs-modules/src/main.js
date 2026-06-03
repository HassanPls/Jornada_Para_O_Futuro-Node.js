const { getFullName, getProductLabel } = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

async function main() {
  console.log("rodando");

  database.connectToDatabase();

  console.log("Carrinho de compras: ");
  getFullName("405", "teclado");

  if (config.devArea.production) {
    console.log("API em desenvolvimento de produção");
    console.log("Dispositivo: " + config.client.device);
  }
}

main();
