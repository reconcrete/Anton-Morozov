export const getRandomTilt = () => {
  const tilt = Math.floor(Math.random() * 5) + 1;
  return tilt % 2 === 0 ? tilt : tilt * -1;
};
