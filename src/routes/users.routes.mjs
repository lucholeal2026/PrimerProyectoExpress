import { Router } from 'express';
import { mockUsers } from '../data/mockUsers.mjs';
import { query, validationResult, body, matchedData, checkSchema } from 'express-validator';
import { createUserValidationSchema } from "../utils/validationSchemas.mjs"
import { resolveIndexByUserId } from "../utils/utils.middleware.mjs"


const router = Router();

router.get(
  "/",
  (request, response, next) => {
    console.log("Base URL 1");

  },
  (request, response, next) => {
    console.log("Base URL 2");
    next();
  },
  (request, response) => {
    //response.send("Hola, Mundo!")
    //response.send({"msg": "Hello!"})
    response.status(201).send({ msg: "Hello" })
  })

router.get("/api/users",
  query('filter')
    .isString()
    .notEmpty()
    .withMessage('El filtro no puede estar vacio')
    .isLength({ min: 3, max: 10 })
    .withMessage("Debe tener de 3 - 10 caracteres"),
  (request, response) => {
    // console.log(request["express-validator#contexts"])
    const result = validationResult(request);              //**agregamos
    console.log(result)

    const {
      query: { filter, value },
    } = request;

    if (filter && value)
      return response.send(
        mockUsers.filter((user) => user[filter].includes(value))
      );
    return response.send(mockUsers)
  })

router.get("/api/users/:id", resolveIndexByUserId, (request, response) => {
  //console.log(request.params);
  //const parseId = parseInt(request.params.id);
  const { findUserIndex } = request;
  const findUser = mockUsers[findUserIndex];

  if (!findUser) return response.sendStatus(404);

  //si encuentra devuelve respuesta
  return response.send(findUser)

})

router.post("/api/users",
  checkSchema(createUserValidationSchema),
  (request, response) => {
    const result = validationResult(request);
    console.log(result)

    if (!result.isEmpty()) {
      return response.status(400).send({ errors: result.array() })
    }

    const data = matchedData(request) //**agregar
    //console.log(data) //**agregar

    // const { body } = request;
    const newUser = { id: uuidv4(), ...data }; //cambiar
    mockUsers.push(newUser);
    return response.status(201).send(newUser)
  })

router.put("/api/users/:id", resolveIndexByUserId, (request, response) => {
  const { body, findUserIndex } = request;

  mockUsers[findUserIndex] = { id: mockUsers[findUserIndex].id, ...body };
  return response.sendStatus(200);
});

router.patch("/api/users/:id", resolveIndexByUserId, [
  body("nombre")
    .optional()
    .notEmpty()
    .withMessage("El nombre no puede estar vacio")
    .isLength({ min: 5, max: 32 })
    .withMessage(
      "Usuario db tener mínimo 5 y máximo 32 caracteres"
    )
    .isString()
    .withMessage("El usuario debe ser string"),
  body("apellido")
    .optional()
    .notEmpty()
    .withMessage("El campo apellido no puede ser vacio")
],
  (request, response) => {
    const { findUserIndex } = request;

    const result = validationResult(request);
    if (!result.isEmpty()) {
      return response.status(400).send({ errors: result.array() })
    }

    const data = matchedData(request)
    mockUsers[findUserIndex] = { ...mockUsers[findUserIndex], ...data };
    return response.sendStatus(200);
  })

router.delete("/api/users/:id", (request, response) => {
  const { findUserIndex } = request;

  mockUsers.splice(findUserIndex, 1);
  return response.sendStatus(200);
});


export default router;