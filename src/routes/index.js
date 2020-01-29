import express from "express";
import clientsRoute from "./clients";

const router = express.Router();

router.use("/clients", clientsRoute);

router.get("/", (req, res) => {
    return res.send("Hello world");
});

export default router;
