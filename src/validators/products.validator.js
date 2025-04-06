const validateProductData = (data) => {
  const errors = [];

  if (!data.name || typeof data.name !== "string") {
    errors.push(
      'El campo "name" es obligatorio y debe ser una cadena de texto.'
    );
  }
  if (!data.description || typeof data.description !== "string") {
    errors.push(
      'El campo "description" es obligatorio y debe ser una cadena de texto.'
    );
  }

  if (data.price !== undefined) {
    if (isNaN(data.price) || Number(data.price) <= 0 || !Number.isFinite(data.price)) {
      errors.push('El campo "price" debe ser un número positivo y con dos decimales.');
    }
  }
  if (!data.user_id || isNaN(data.user_id)) {
    errors.push(
      'El campo "user_id" es obligatorio y debe ser un número válido.'
    );
  }

  return errors;
};

module.exports = { validateProductData };
