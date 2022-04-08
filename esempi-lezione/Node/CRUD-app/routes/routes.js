import express from "express";

import { 
    getPizzas,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza
 } from "../controllers/pizzas-controller.js";
 
const router = express.Router();
 
router.get('/pizzas', getPizzas);
router.get('/pizzas/:id', getPizzaById);
router.post('/pizzas', createPizza);
router.put('/pizzas/:id', updatePizza);
router.delete('/pizzas/:id', deletePizza);
 
export default router;