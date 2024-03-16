import { pg } from "../db/conectiondb.js"

export const getProducts = async (req, res) => {
    try {
        const client = await pg.connect()
        const response = await client.query("select * from products")
        res.json(response.rows)
        client.release()
    } catch (error) {
        console.log(error)
    }
}

export const createProducts = async (req, res) => {
    const {mark, description, price} = req.body

    try {
        const client = await pg.connect()
        await client.query("insert into products(marck, description, price) VALUES($1, $2, $3)", [mark, description, price])
        res.json({msg: "producto creado"})
        client.release()
    } catch (error) {
        console.log(error)
    }
}

export const updateProducts = async (req, res) => {
    const { mark, description, price} = req.body

    try {
        const client = await pg.connect()
        const sqlQuery = `update products set marck = $1, description = $2, price = $3 where id = $4`
        await client.query(sqlQuery, [mark, description, price, req.params.id])
        res.json({msg: "producto actualizado"})
        client.release()
    } catch (error) {
        console.log(error)
    }
}

export const deleteProducts = async (req, res) => {

    try {
        const client = await pg.connect()
        await client.query("delete from products where id = ?", [req.params.id])
        res.json({msg: "producto eliminado"})
        client.release()
    } catch (error) {
        console.log(error)
    }
}