const formatDate = (date: string) => {
  const dateObject = new Date(date);
  if (dateObject.toString() === 'Invalid Date') {
    return '';
  }

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return dateObject.toLocaleDateString('en-US', options);
};

export { formatDate };
