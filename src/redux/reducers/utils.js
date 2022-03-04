export const addOneCartItemAndReturn = (cart, item) => {
  const isItemAlreadyThere = cart.find((oneItem) => oneItem.id === item.id);
  return isItemAlreadyThere
    ? cart.map((oneItem) => {
        if (oneItem.id === item.id) {
          return { ...oneItem, count: oneItem.count + 1 };
        } else return oneItem;
      })
    : [...cart, { id: item.id, count: 1 , price: item.price}];
};

export const removeCartItemAndReturn = (cart, item) => {
  const isItemPresent = cart.find((oneItem) => oneItem.id === item.id);
  if (!isItemPresent) {
    return [...cart];
  }

  const itemCount = isItemPresent.count;
  return itemCount > 1
    ? cart.map((oneItem) => {
        if (oneItem.id === item.id) {
          return { ...oneItem, count: oneItem.count - 1 };
        } else return oneItem;
      })
    : cart.filter((oneItem) => oneItem.id !== item.id);
};
