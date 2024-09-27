import express from "express";

let app = express()
const PORT = process.env.NODE_DOCKER_PORT
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    app.emit("Running")
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to node application." });
})