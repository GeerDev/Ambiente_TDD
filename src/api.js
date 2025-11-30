export const obtenerUsuario = async (id) => {
  if (id <= 0) throw new Error('ID inválido');
  return new Promise((resolve) => 
    setTimeout(() => resolve({ id, nombre: 'Carlos' }), 100)
  );
};