const formatDate = (date: string) => {
  const dateObject = new Date(date);
  return dateObject.toLocaleDateString();
};

export { formatDate };
