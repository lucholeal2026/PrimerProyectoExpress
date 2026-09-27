export const createUserValidationSchema = {
  nombre: {
    notEmpty: {
      errorMessage: "El usuario no puede estar vacio",
    },
    isLength: {
      options: {
        min: 5,
        max: 32,
      },
      errorMessage:
        "Usuario db tener mínimo 5 y máximo 32 caracteres"
    },
    isString: {
      errorMessage: "El usuario debe ser string"
    },
  },
  apellido: {
    notEmpty: {
      errorMessage: "El displayname no puede estar vacio",
    },
  }
}