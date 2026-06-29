import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({
  logger: true,
});

server.register(cors, {
    origin: "*",
    methods: "GET"
})

const teams = [
  { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 2, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
];

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lewis Hamilton", base: "Ferrari" },
  { id: 2, name: "Lando Norris", base: "McLaren" },
];

server.get("/teams", async (req, res) => {
  res.type("application/json").code(200);
  return teams;
});

server.get("/drivers", async (req, res) => {
  res.type("application/json").code(200);
  return drivers;
});

interface DriverParams {
  id: string;
}
server.get<{ Params: DriverParams }>("/drivers/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const driver = drivers.find((d) => d.id == id);

  if (!driver) {
    res.type("application/json").code(404);
    return { message: "Driver Not Found" };
  } else {
    res.type("application/json").code(200);
    return driver;
  }
});

server.listen({ port: 3333 }, () => {
  console.log("Server init");
});
