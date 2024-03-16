import {Router} from "express"
import { createProducts, deleteProducts, getProducts, updateProducts } from "../controller/productsController.js"

const router = Router()


router.get("/getProducts", getProducts)
router.post("/createProduct", createProducts)
router.delete("/deleteProduct/:id", deleteProducts)
router.put("/updateProduct/:id", updateProducts)


export default router