export const splitStores = (item) => {
  if (!item) {
    return null;
  }
  return item.split("/");
};