import express from "express";
import cors from "cors";

import router from "./routes";
import { config } from "./config";


const app = express();


app.use(cors());
app.use(express.json());


app.use("/", router);


app.listen(
    config.port,
    () => {

        console.log(
            `COREX Gateway running on ${config.port}`
        );

    }
);
