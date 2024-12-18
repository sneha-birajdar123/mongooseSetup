import express from "express";
const app = express()
const PORT = 5000

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