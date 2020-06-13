export const addItemToArray = (prevArr=[], newItem) => {
  if (!Array.isArray(prevArr) || !newItem) return prevArr;

  return [...prevArr, newItem];
};

export const removeItemFromArray = (prevArr=[], itemToRemove) => {
  if (!Array.isArray(prevArr) || !itemToRemove) return prevArr;
  const nextArr = prevArr.filter(item => item !== itemToRemove);
  return nextArr;
};