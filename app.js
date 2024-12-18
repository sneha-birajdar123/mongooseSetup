import express from "express";
import config from "config"
const app = express()
const PORT = config.get("PORT") || 5000
console.log(PORT);

app.get("/",(req, res) => {
    try {
        res.status(200).json({msg: "Hello world"})
    } catch (error) {
        console.log(error);
    }
})
app.listen(PORT, () => {
    console.log(`server is up and running at ${PORT}`);
})