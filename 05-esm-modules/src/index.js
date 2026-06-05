//import connectoToDatabase from "./utils/database.js";
import * as database from "./utils/database.js";

console.log(database.databaseType.userType);
database.connectoToDatabase("MongoDB");
database.disconnectDatabase("MongoDB");
