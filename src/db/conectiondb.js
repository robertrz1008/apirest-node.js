import {createPool} from "mysql2/promise"
import { DB_DATABASE, DB_LOCALHOST, DB_PASSWORD, DB_PORT, DB_USER } from "../config.js"

export const connect =  createPool({
    host: DB_LOCALHOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD, 
    database: DB_DATABASE
})
