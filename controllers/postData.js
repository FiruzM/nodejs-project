import { products } from "../data/data.js";
export const postDataController = (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "Request body is empty" });
  }

  const categoryArray = ["fruits", "vegetable", "dairy", "meat"];

  const { name, category, price, discount, image } = req.body;

  if (!name || !category || !price) {
    return res.status(400).json({
      message: "Please provide all required fields: name, category, price",
    });
  }

  if (!categoryArray.includes(category)) {
    return res.status(400).json({
      message: `Category must be one of the following: ${categoryArray.join(
        ", "
      )}`,
    });
  }

  const id =
    products.length > 0 ? Math.max(...products.map((item) => item.id)) : 0;

  const newProduct = {
    id: id + 1,
    name,
    category,
    price: Number(price),
    image: image || null,
    discount: discount ? Number(discount) : null,
    description: req.body.description || null,
  };

  products.push(newProduct);
  return res.status(201).json(newProduct);
};
