export const getCarPhoto = (photo: string, productId: number, photoVer: number) => {
  return `https://static.my.ge/myauto/photos/${photo}/thumbs/${productId}_1.jpg?v=${photoVer}`;
};
