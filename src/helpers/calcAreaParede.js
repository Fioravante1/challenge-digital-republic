function areaParede(inputUser) {
  const paredes = {
    multiplicaoParede1: inputUser.parede1_Altura * inputUser.parede1_Largura,
    multiplicaoParede2: inputUser.parede2_Altura * inputUser.parede2_Largura,
    multiplicaoParede3: inputUser.parede3_Altura * inputUser.parede3_Largura,
    multiplicaoParede4: inputUser.parede4_Altura * inputUser.parede4_Largura,
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
