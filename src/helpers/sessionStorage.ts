const saveToSessionStorage = <T>(key: string, value: T) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

const getFromSessionStorage = <T>(key: string): T | null => {
  const value = sessionStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }

  return null;
};

const removeFromSessionStorage = (key: string) => {
  sessionStorage.removeItem(key);
};

export {
  saveToSessionStorage,
  getFromSessionStorage,
  removeFromSessionStorage,
};
