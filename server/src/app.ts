import express, { Application } from "express";
import http from "http";
import cors from "cors";
import connectDB from "../src/config/db";
import expressConfig from "./express";
import serverConfig from "./server";
import { routes } from "./routes/index";
import dependencies from "./config/dependencies";
import errorHandlingMiddleware from "./middleware/errorHandlingMiddleware";

const app: Application = express();
const server = http.createServer(app);

app.use(cors());

// connecting database
connectDB();

// calling express configuration
expressConfig(app);

app.use("/api", routes(dependencies));

// starting the server
serverConfig(server).startServer();

app.use(errorHandlingMiddleware);

// routes
// routers(app);
