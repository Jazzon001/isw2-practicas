# Evidencia — Práctica 4

Salida de `node fiados.test.js` (suite en verde):

```
  ✓ camino feliz: 5% de mora si está vencido
  ✓ borde: 0 días vencidos no genera mora
  ✓ borde: 1 día vencido ya genera mora
  ✓ borde: monto 0 devuelve 0
  ✓ error: monto negativo lanza error
  ✓ error: días no numéricos lanza error
  ✓ error: días undefined lanza error

7 pasaron, 0 fallaron
```

## Historial TDD

- `test(fiados): red — caso monto negativo y días no numéricos` (3 tests fallan)
- `feat(fiados): green — validaciones de monto y días` (7/7 pasan)
