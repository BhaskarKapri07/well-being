
const fs = require("fs")
const express = require("express")
const cors = require("cors")
const mockTherapistData = fs.readFileSync("./mockData.json").toString()

const app = express()

app.use(express.json())
app.use(cors());

app.get('/mockData', (req, res) => {
    res.json({
        "message" : "Data Fetched successfully",
        "data": mockTherapistData
    });
  });

app.listen(8000,()=>{
    console.log("Server is listening on 8000")
})