require("dotenv").config();
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const mockTherapistData = fs.readFileSync("./mockData/mockTherapistsData.json").toString();
const mockADHDData = fs.readFileSync("./mockData/mockAdhdData.json").toString()
const axios = require("axios")
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

app.post("/therapistData", async(req, res) => {
  
  const {latitude,longitude} = req.body
  const options = {
    method: 'GET',
    url: 'https://map-places.p.rapidapi.com/nearbysearch/json',
    params: {
      location: `${latitude},${longitude}`,
      radius: '1500',
      keyword: 'therapist',
      type: 'clinic'
    },
    headers: {
      'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY,
      'X-RapidAPI-Host': process.env.X_RAPIDAPI_HOST
    }
  };

  try {
    const response = await axios.request(options);
    const data = await response.data
    res.json({
      message:'Data fetched successfully',
      data 
    })
  } catch (error) {
      console.error(error)
      res.status(500).json({message :'Error fetching therapist data'})
  }

});

app.get("/mockADHDData", (req, res) => {
  res.json({
    message: "Data Fetched successfully",
    data: mockADHDData,
  });
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
