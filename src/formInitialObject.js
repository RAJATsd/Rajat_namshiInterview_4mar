const initialObjectFormer = () => {
  const initObject = {};
  for (let i = 1; i <= 16; ++i) {
    initObject[i] = {
      clickedNumber: 0,
      isRed: false,
    };
  }
  return initObject;
};

export default initialObjectFormer;
