import { startups } from "../data/data.js";

export const getDataByPathParamController = (req, res) => {
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
};
