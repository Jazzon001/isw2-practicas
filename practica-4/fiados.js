// Calculadora de fiados (versión inicial: sin validaciones aún)
function calcularMora(monto, diasVencidos) {
  return diasVencidos > 0 ? monto * 0.05 : 0;
}

module.exports = { calcularMora };
