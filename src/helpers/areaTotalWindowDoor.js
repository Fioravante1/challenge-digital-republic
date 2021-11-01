import areaWall from './calcAreaWall';

function totalAreaWindowDoor(inputUser) {
  const area = areaWall(inputUser);
  const areaTotalWindow = (2.00 * 1.20) * inputUser.janela;
  const areaTotaDoor = (0.80 * 1.90) * inputUser.porta;
  let areaTotalDiscounted = areaTotalWindow + areaTotaDoor;

  if (!areaTotalDiscounted) {
    areaTotalDiscounted = 0;
  }

  return area - areaTotalDiscounted;
}

export default totalAreaWindowDoor;
