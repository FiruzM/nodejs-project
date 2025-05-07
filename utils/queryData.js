export const queryData = (data, query) => {
  if (query.name) {
    data = data.filter((item) =>
      item.name.toLowerCase().includes(query.name.toLowerCase())
    );
  }

  if (query.category) {
    data = data.filter((item) => item.category === query.category);
  }

  if (query.discount === "true") {
    data = data.filter(
      (item) => item.discount !== null && item.discount !== undefined
    );
  }

  if (query.from) {
    data = data.filter((item) => item.price >= +query.from);
  }

  if (query.to) {
    data = data.filter((item) => item.price <= +query.to);
  }

  if (query.sort) {
    if (query.sort === "asc") {
      data = data.sort((a, b) => a.price - b.price);
    }
    if (query.sort === "desc") {
      data = data.sort((a, b) => b.price - a.price);
    }
  }
  return data;
};
