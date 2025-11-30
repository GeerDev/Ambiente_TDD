import { expect, test, describe } from 'vitest'
import { sum } from './src/sum.js'

describe('Función Sumar', () => {
  test('Ejemplo básico', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('Negación', () => {
    expect(2 + 2).not.toBe(5);
  })
})
