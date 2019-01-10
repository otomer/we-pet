const cleanup = s => {
  return encodeURIComponent(s.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-'));
};

export { cleanup };
