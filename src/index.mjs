import express from "express";
import routes from "./routes/index.mjs"

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi API en la nube! 🚀 El servidor está funcionando correctamente.');
});

app.use(express.json());
app.use(routes);

const loggingMiddleware = (request, response, next) => {
  console.log(`${request.method} - ${request.url}`);
  next();
};

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`)
})


