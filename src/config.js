import dotenv from "dotenv"

dotenv.config() 

export const PORT = process.env.PORT || 3000
export const DB_LOCALHOST = process.env.DB_LOCALHOST ||"localhost"
export const DB_PORT = process.env.DB_PORT || 3300
export const DB_USER = process.env.DB_USER || "root"
export const DB_PASSWORD = process.env.DB_PASSWORD || "234567890"
export const DB_DATABASE = process.env.DB_DATABASE || "marcketdb"


