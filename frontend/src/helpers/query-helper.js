const formatQueryParams = filters => {
  const str = [];
  for (let p in filters) {
    if (p && filters.hasOwnProperty(p) && filters[p]) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(filters[p]));
    }
  }

  return str.join('&');
};

export { formatQueryParams };
