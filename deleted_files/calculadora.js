function somar(numero1, numero2) {
  if (typeof numero1 !== "number") {
    return "Erro";
  }
  return numero1 + numero2;
}

exports.somar = somar;
//  [exports.nomedafunção = função] O comando exports é usado para
//  permitir o import por outro arquivo.
