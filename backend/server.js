import executeJS from "./codeexecution.js";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 9001;

app.use(bodyParser.json())
app.use(cors({origin: true, credentials: true}))

app.post("/execute", async (req, res) => {
    console.log("Got request for code execution");
    const jsReturn = await executeJS(req.body.content);
    console.log("Sending back: " + jsReturn.output)
    res.json(jsReturn)
})

app.listen(PORT, () => {
    console.log(`Backend listening on port ${PORT}`)
})