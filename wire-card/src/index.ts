import { app } from "./App";
import { clientRouter } from "./Router/client";

app.use("/client", clientRouter)

