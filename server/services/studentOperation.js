const db = require("./db");
async function create(student) {
  const rows = await db.query(
    `Insert into students (name, contact_number, department) values (?, ?, ?)`,
    [student.name, student.contact, student.department]
  );
  let message = "Error in inserting student details";

  if (result.affectedRows) {
    message = "Student detail inserted successfully";
  }

  return { message };
}
async function getAll() {
  const rows = await db.query(
    `Select id, name, contact_number, department from students where isDeleted = 0`,
    []
  );
  return rows;
}
async function get(id) {
  const rows = await db.query(
    `Select id, name, contact_number, department from students where id = ? and isDeleted = 0`,
    [id]
  );
  return rows;
}
async function update(id, student) {
  const rows = await db.query(
    `Update table students set name = ? , contact_number = ?, department = ? where id = ?`,
    [student.name, student.contact, student.department, id]
  );
  return rows;
}
async function markDelete(id) {
  const rows = await db.query(
    `Update table students set isDeleted=1 where id = ?`,
    [id]
  );
  return rows;
}
module.exports = {
  create,
  getAll,
  get,
  update,
  markDelete,
};
