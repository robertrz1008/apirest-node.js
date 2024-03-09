import { connect } from "../db/conectiondb.js"

export const getProducts = async (req, res) => {
    try {
        const response = await connect.query("select * from products")
        res.json(response[0])
    } catch (error) {
        console.log(error)
    }
}

export const createProducts = async (req, res) => {
    const {mark, description, price} = req.body

    try {
        await connect.query("insert into products(mark, description, price) VALUES(?, ?, ?)", [mark, description, price])
        res.json({msg: "producto creado"})
    } catch (error) {
        console.log(error)
    }
}

export const updateProducts = async (req, res) => {
    const { mark, description, price} = req.body

    try {
        const sqlQuery = `update products set mark = ?, description = ?, price = ? where id = ?`
        await connect.query(sqlQuery, [mark, description, price, req.params.id])
        res.json({msg: "producto actualizado"})
    } catch (error) {
        console.log(error)
    }
}

export const deleteProducts = async (req, res) => {

    try {
        await connect.query("delete from products where id = ?", [req.params.id])
        res.json({msg: "producto eliminado"})
    } catch (error) {
        console.log(error)
    }
}