const toDate = (maybe?: string) => {
  const date = new Date(maybe || 'error');
  return Number.isNaN(date.getTime()) ? undefined : date;
};

export {
  toDate,
};
