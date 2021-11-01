import swal from 'sweetalert';
import areaWall from './calcAreaWall';

function validPercentage(inputUser) {
  const area = areaWall(inputUser);
  const areaTotalWindow = (2.00 * 1.20) * inputUser.janela;
  const areaTotaDoor = (0.80 * 1.90) * inputUser.porta;
  const areaTotalDiscounted = areaTotalWindow + areaTotaDoor;

  const division = area / 2;

  if (areaTotalDiscounted > division) {
    swal('Atenção', 'Área das janelas e portas é superior a 50% da área das paredes!', 'error');
    return true;
  }
  return false;
}

export default validPercentage;
