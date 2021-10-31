import areaParede from './calcAreaParede';

function areaTotalParedes(inputUser) {
  const area = areaParede(inputUser);

  const areaTotalJanela = (2.00 * 1.20) * inputUser.janela;
  const areaTotaPortas = (0.80 * 1.90) * inputUser.porta;
  const areaTotalDesconto = areaTotalJanela + areaTotaPortas;

  if (!areaTotalDesconto) {
    return area / 5;
  }

  const areaTotal = area - areaTotalDesconto;
  const litrosNecesario = areaTotal / 5;

  return litrosNecesario.toFixed(2);
}

export default areaTotalParedes;
