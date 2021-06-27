const config = require("../config");
const mysql = require("mysql2");

async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [results, fields] = await connection.execute(sql, params);
  console.log(results);
  await connection.end();
  return results;
}
module.exports = {
  query,
};
