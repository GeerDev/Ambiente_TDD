import { describe, it, expect } from 'vitest';

describe('Validaciones básicas', () => {
  it('Debe validar igualdad estricta de números', () => {
    expect(2 + 2).toBe(4);
    expect(2 + 2).not.toBe(5); // Negación
  });

  it('Debe verificar contenido de objetos (usar toEqual)', () => {
    const usuario = { nombre: 'Ana', id: 1 };
    const resultado = { nombre: 'Ana', id: 1 };
    
    // .toBe fallaría aquí porque son referencias de memoria distintas
    expect(usuario).toEqual(resultado); 
  });

  it('Debe verificar elementos dentro de un array', () => {
    const listaDeCompras = ['manzanas', 'pan', 'leche'];
    
    expect(listaDeCompras).toContain('leche');
    expect(listaDeCompras).toHaveLength(3);
  });
  
  it('Debe validar booleanos y nulos', () => {
    const valor = null;
    expect(valor).toBeNull();
    expect(valor).toBeFalsy(); // null, undefined, 0, false se consideran "falsy"
  });
});