export const queryData = (data, query) => {
  if (query.industry) {
    data = data.filter((item) =>
      item.industry.toLowerCase().includes(query.industry.toLowerCase())
    );
  }

  if (query.country) {
    data = data.filter((item) =>
      item.country.toLowerCase().includes(query.country.toLowerCase())
    );
  }

  if (query.continent) {
    data = data.filter((item) =>
      item.continent.toLowerCase().includes(query.continent.toLowerCase())
    );
  }

  if (query.is_seeking_funding) {
    data = data.filter(
      (item) =>
        item.is_seeking_funding ===
        JSON.parse(query.is_seeking_funding.toLowerCase())
    );
  }

  if (query.has_mvp) {
    data = data.filter(
      (item) => item.has_mvp === JSON.parse(query.has_mvp.toLowerCase())
    );
  }

  return data;
};
