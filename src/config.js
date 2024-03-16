import dotenv from "dotenv"

dotenv.config() 

export const PORT = process.env.PORT || 3000
export const DB_LOCALHOST = process.env.DB_LOCALHOST ||"localhost"
export const DB_PORT = process.env.DB_PORT || 5432
export const DB_USER = process.env.DB_USER || "postgres"
export const DB_PASSWORD = process.env.DB_PASSWORD || "horizon.20"
export const DB_DATABASE = process.env.DB_DATABASE || "marcketdb"


