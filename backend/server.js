import executeJS from "./codeexecution.js";
import bodyParser from "body-parser";
import express from "express";
const app = express();
const PORT = 4444;

app.use(bodyParser.json())

app.post("/execute", async (req, res) => {
    const jsReturn = await executeJS(req.body.content);
    res.send(jsReturn)
})

app.listen(PORT, () => {
    console.log(`Backend listening on port ${PORT}`)
})