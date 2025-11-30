import { describe, it, expect } from 'vitest';
import { obtenerUsuario } from './src/api.js';

describe('Peticiones Asíncronas', () => {
  it('Debe obtener el usuario correctamente', async () => {
    const usuario = await obtenerUsuario(10);
    expect(usuario.nombre).toBe('Carlos');
    expect(usuario.id).toBe(10);
  });

  it('Debe resolver a un objeto con nombre Carlos', async () => {
    await expect(obtenerUsuario(5)).resolves.toHaveProperty('nombre', 'Carlos');
  });

  it('Debe lanzar un error si el ID es inválido', async () => {
    await expect(obtenerUsuario(-1)).rejects.toThrow('ID inválido');
  });
});