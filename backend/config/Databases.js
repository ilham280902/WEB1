import { Sequelize } from "sequelize";

const db = new Sequelize('tugas_besar','root','', {
  host: "localhost",
  dialect: "mysql",
});

export default db;
