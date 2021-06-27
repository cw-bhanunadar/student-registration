const axios = require("axios");
var url = "http://localhost:5000/api/student";

function getAll() {
  return axios.get(url);
}

function getStudentById(id) {
  return axios.get(url + "/" + id);
}
function deleteStudent(id) {
  return axios({
    method: "delete",
    url: url + "/" + id,
  });
}
function createStudent(student) {
  return axios({
    method: "post",
    url: url,
    data: student,
  });
}
function updateStudent(student) {
  return axios({
    method: "put",
    url: url + "/" + student.id,
    data: student,
  });
}
module.exports = {
  getAll,
  getStudentById,
  deleteStudent,
  createStudent,
  updateStudent,
};
