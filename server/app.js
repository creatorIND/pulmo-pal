const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const clientBuildPath = path.join(__dirname, "../client/dist");
app.use(express.static(clientBuildPath));

app.get("/api/data", (req, res) => {
	res.json({ message: "Hello from server!" });
});

app.get("*", (req, res) => {
	res.sendFile(path.join(clientBuildPath, "index.html"));
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
