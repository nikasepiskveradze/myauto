export const getCarPhoto = (photo: string, carId: number, photoVer: number) => {
  return `https://static.my.ge/myauto/photos/${photo}/thumbs/${carId}_1.jpg?v=${photoVer}`;
};
