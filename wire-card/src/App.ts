import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { AddressInfo } from "net";

dotenv.config();

export const app = express();

app.use(cors());
app.use(express.json());

const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});
