export const useLocalJson = (_key_local) => {
  const getLocal = () => {
    return localStorage[_key_local]
      ? JSON.parse(localStorage[_key_local])
      : null;
  };

  const saveLocal = (_data) => {
    localStorage.setItem(_key_local, JSON.stringify(_data));
  };

  return { getLocal, saveLocal };
};
