export const queryData = (data, query) => {
  if (query.name) {
    data = data.filter((item) =>
      item.name.toLowerCase().includes(query.name.toLowerCase())
    );
  }

  return data;
};
