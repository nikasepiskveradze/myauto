export const formatPlainNumber = (value: number | string) => {
  return value.toLocaleString();
};

export const formatEngineVolume = (value?: number) => {
  return value ? value / 1000 : 0;
};
