import express from "express";
import routes from "./routes";

import database from "./config/databse";

const app = express();

const configureExpress = () => {
    app.use(express.json());
    app.use("/", routes);
    app.database = database

    return app
}

export default async() => {
    const app = configureExpress()

    await app.database.connect()

    return app
};
