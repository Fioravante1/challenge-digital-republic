import areaParede from './calcAreaWall';

function calcPaintCans(area) {
  let areaRemaining = areaParede(area); // area total
  const cans = [18, 3.6, 2.5, 0.5];

  function calcLitersAreaCoverage(liters) {
    // 1l === 5m²
    return liters * 5;
  }

  const cansQuantities = cans.map((liters) => {
    const areaCoverage = calcLitersAreaCoverage(liters); // area total coberta

    if (areaCoverage > areaRemaining) {
      return {
        liters,
        quantity: 0,
      };
    }
    const quantity = parseInt((areaRemaining / areaCoverage), 10);
    areaRemaining %= areaCoverage;

    return {
      liters,
      quantity,
    };
  });

  // eslint-disable-next-line no-shadow
  function findSmallest(cans) {
    let smallest = cans[0];
    let indexOfSmallest = 0;
    let index = 0;

    // eslint-disable-next-line no-restricted-syntax
    for (const can of cans) {
      if (can < smallest) {
        smallest = can;
        indexOfSmallest = index;
      }
      // eslint-disable-next-line no-plusplus
      index++;
    }

    return [smallest, indexOfSmallest];
  }

  if (areaRemaining > 0) {
    const [can, index] = findSmallest(cans);
    const areaCoverage = calcLitersAreaCoverage(can);
    const quantity = areaRemaining / areaCoverage;

    cansQuantities[index].quantity += parseFloat(quantity.toFixed(2));
  }

  return cansQuantities;
}

export default calcPaintCans;
