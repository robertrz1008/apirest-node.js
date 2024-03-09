import {Router} from "express"
import { createProducts, deleteProducts, getProducts, updateProducts } from "../controller/productsController.js"

const router = Router()


router.get("/getProducts", getProducts)
router.post("/createProducts", createProducts)
router.delete("/deleteProducts/:id", deleteProducts)
router.put("/updateProducts/:id", updateProducts)


export default router