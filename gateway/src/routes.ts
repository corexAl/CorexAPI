import { Router } from "express";

const router = Router();


router.get(
    "/health",
    (_, res) => {
        res.json({
            status: "online",
            service: "corex-gateway"
        });
    }
);


router.post(
    "/v1/chat",
    async (req, res) => {

        const prompt =
            req.body.prompt;


        res.json({
            response:
                `COREX received: ${prompt}`
        });
    }
);


export default router;
