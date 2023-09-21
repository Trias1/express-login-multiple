import { Sequelize } from "sequelize";

const db = new Sequelize('sintai3','root','',{
    host: "localhost",
    dialect: "mysql"
})

export default db;