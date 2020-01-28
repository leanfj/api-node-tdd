import express from "express";

const app = express();
app.use(express.json());

app.get("/clients", (req, res) => {
    return res.send([
        {
            name: "Default Client Name",
            origin: "Elo7",
            birthDate: "22/03/1986",
            cellPhone: "(21)96883-6199"
        }
    ]);
});

export default app;
