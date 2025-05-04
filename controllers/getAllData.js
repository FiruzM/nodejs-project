import { startups } from "../data/data.js";
import { queryData } from "../utils/queryData.js";
export const getAllDataController = (req, res) => {
  let filteredData = queryData(startups, req.query);

  res.json(filteredData);
};
