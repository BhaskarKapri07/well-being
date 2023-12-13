require("dotenv").config();
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const mockTherapistData = fs.readFileSync("./mockData/mockTherapistsData.json").toString();
const mockADHDData = fs.readFileSync("./mockData/mockAdhdData.json").toString()

const userRoutes = require("./src/routes/userRoutes");
const journalRoutes = require("./src/routes/journalRoutes");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.use("/api/users", userRoutes);
app.use("/api/journal", journalRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/mockTherapistData", (req, res) => {
  res.json({
    message: "Data Fetched successfully",
    data: mockTherapistData,
  });
});

app.get("/mockADHDData", (req, res) => {
  res.json({
    message: "Data Fetched successfully",
    data: mockADHDData,
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
