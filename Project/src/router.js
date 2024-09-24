import { Router } from "express";
import usuarioController from "./app/controller/usuarioController.js";

const router = Router();

router.get('/usuario', usuarioController.index);
router.get('/usuario/:id', usuarioController.show);
router.post('/usuario', usuarioController.store);
router.put('/usuario/:id', usuarioController.update);
router.delete('/usuario/:id', usuarioController.delete);

export default router;
