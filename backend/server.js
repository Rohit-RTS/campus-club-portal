const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const clubRoutes = require("./routes/clubRoutes");
const LoginRoute = require("./routes/LoginRoute");
const clubDetailRoute = require("./routes/clubDetailRoutes");

const app = express();

const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/club", clubRoutes);
app.use("/api/login", LoginRoute);
app.use("/api/club" ,clubDetailRoute);

app.get("/", (req, res) => {
    res.send("this is the server started");
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
