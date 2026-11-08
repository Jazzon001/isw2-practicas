const { calcularMora } = require('./fiados');

// --- Mini-runner ---
let pasados = 0, fallidos = 0;

function test(nombre, fn) {
  try {
    fn();
    pasados++;
    console.log(`  ✓ ${nombre}`);
  } catch (e) {
    fallidos++;
    console.log(`  ✗ ${nombre}\n      ${e.message}`);
  }
}

function assertEqual(actual, esperado) {
  if (actual !== esperado) {
    throw new Error(`esperado ${JSON.stringify(esperado)} pero se obtuvo ${JSON.stringify(actual)}`);
  }
}

function assertThrows(fn) {
  try { fn(); } catch (e) { return; }
  throw new Error('se esperaba que lanzara un error');
}

// --- Tests (AAA: Arrange, Act, Assert) ---
test('camino feliz: 5% de mora si está vencido', () => {
  const monto = 1000, dias = 10;
  const mora = calcularMora(monto, dias);
  assertEqual(mora, 50);
});

test('borde: 0 días vencidos no genera mora', () => {
  const monto = 1000, dias = 0;
  const mora = calcularMora(monto, dias);
  assertEqual(mora, 0);
});

test('borde: 1 día vencido ya genera mora', () => {
  const monto = 200, dias = 1;
  const mora = calcularMora(monto, dias);
  assertEqual(mora, 10);
});

test('borde: monto 0 devuelve 0', () => {
  const monto = 0, dias = 5;
  const mora = calcularMora(monto, dias);
  assertEqual(mora, 0);
});

test('error: monto negativo lanza error', () => {
  const monto = -100, dias = 5;
  assertThrows(() => calcularMora(monto, dias));
});

test('error: días no numéricos lanza error', () => {
  const monto = 100, dias = 'abc';
  assertThrows(() => calcularMora(monto, dias));
});

test('error: días undefined lanza error', () => {
  const monto = 100;
  assertThrows(() => calcularMora(monto, undefined));
});

console.log(`\n${pasados} pasaron, ${fallidos} fallaron`);
process.exit(fallidos ? 1 : 0);
