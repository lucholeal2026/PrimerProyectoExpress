import { Router } from "express";
import usersRouter from "./users.routes.mjs"
import materiasRoutes from "./materias.routes.mjs"


const router = Router()

router.use('/', usersRouter);
router.use(materiasRoutes);

export default router;