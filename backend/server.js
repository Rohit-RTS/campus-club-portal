const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const clubRoutes = require("./routes/clubRoutes");

const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/club", clubRoutes);

app.get("/", (req, res) => {
    res.send("this is the server started");
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});