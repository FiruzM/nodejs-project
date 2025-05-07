import { products } from "../data/data.js";
import { queryData } from "../utils/queryData.js";
export const getAllDataController = (req, res) => {
  let filteredData = queryData(products, req.query);
  // Получаем параметры пагинации из query string
  const page = parseInt(req.query.page) || 1; // Текущая страница (по умолчанию 1)
  const perPage = parseInt(req.query.perPage) || 10; // Количество элементов на странице (по умолчанию 10)

  if (page < 1 || perPage < 1) {
    return res.status(400).json({ error: "Invalid pagination parameters" });
  }

  // Рассчитываем индексы для среза массива
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  const paginatedProducts = filteredData.slice(startIndex, endIndex);

  const paginationOptions = {
    currentPage: page,
    perPage: perPage,
    totalPages: Math.ceil(products.length / perPage),
    totalProducts: products.length,
    hasNextPage: endIndex < products.length,
    hasPreviousPage: startIndex > 0,
  };

  res.status(200).json({
    data: paginatedProducts,
    pagination: paginationOptions,
  });
};
