import express from "express"
import router from "./routes/products.routes.js"
import {PORT} from "./config.js"


const app = express()
const productRouter = router

app.use(express.json())

app.get("/home", (req, res) => {
    res.send("Hola desde el servidor")
})

app.use("/api", productRouter)

app.listen(PORT, () => { 
    console.log("server on port " + PORT) 
})