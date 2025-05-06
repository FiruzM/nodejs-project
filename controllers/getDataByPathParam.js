import { products } from "../data/data.js";

export const getDataByPathParamController = (req, res) => {
  const { field, term } = req.params;
  const allowedFields = ["id"];
  if (!allowedFields.includes(field)) {
    return res.status(400).json({
      message: "Search field not allowed. Please use only by 'category'",
    });
  }
  const filteredData = products.find((item) => item[field] === +term);

  res.json(filteredData);
};
