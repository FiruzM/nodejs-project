import express from "express";
import { startups } from "./data/data.js";
import { queryData } from "./utils/queryData.js";
const PORT = 8000;

const app = express();

app.get("/api", (req, res) => {
  let filteredData = queryData(startups, req.query);

  res.json(filteredData);
});

app.get("/api/:field/:term", (req, res) => {
  const { field, term } = req.params;
  const allowedFields = ["country", "continent", "industry"];
  if (!allowedFields.includes(field)) {
    return res.status(400).json({
      message:
        "Search field not allowed. Please use only 'country', 'continent', 'industry'",
    });
  }
  const filteredData = startups.filter(
    (item) => item[field].toLocaleLowerCase() === term.toLocaleLowerCase()
  );

  res.json(filteredData);
});

app.listen(PORT, () => console.log("server connected on port " + PORT));
