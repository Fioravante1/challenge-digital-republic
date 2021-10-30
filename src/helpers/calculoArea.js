function areaParede(objParedes) {
  const paredes = {
    multiplicaoParede1: objParedes.parede1_Altura * objParedes.parede1_Largura,
    multiplicaoParede2: objParedes.parede2_Altura * objParedes.parede2_Largura,
    multiplicaoParede3: objParedes.parede3_Altura * objParedes.parede3_Largura,
    multiplicaoParede4: objParedes.parede4_Altura * objParedes.parede4_Largura,
  };

  const somaAreaParedes = {
    soma:
    paredes.multiplicaoParede1
    + paredes.multiplicaoParede2
    + paredes.multiplicaoParede3
    + paredes.multiplicaoParede4,
  };

  return somaAreaParedes.soma;
}

export default areaParede;
