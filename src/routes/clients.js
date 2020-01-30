import express from "express";
import ClientsController from "../controllers/clients";

const router = express.Router();

const clientsController = new ClientsController();

router.get("/", (req, res) => {
    return clientsController.get(req, res);
});

export default router;
