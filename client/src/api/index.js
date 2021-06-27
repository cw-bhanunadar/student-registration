const axios = require("axios");
var url = "http://localhost:5000/api/student";

function getAll() {
  return axios(url);
}

function getStudentById(id) {
  axios(url + "/" + id).then(function (response) {
    console.log(response);
  });
}
function deleteStudent(id) {
  axios({
    method: "delete",
    url: url + "/" + id,
  }).then(function (response) {
    console.log(response);
  });
}
function createStudent(student) {
  axios({
    method: "post",
    url: url,
    data: student,
  }).then(function (response) {
    console.log(response);
  });
}
function updateStudent(student) {
  axios({
    method: "put",
    url: url + "/" + student.id,
    data: student,
  }).then(function (response) {
    console.log(response);
  });
}
module.exports = {
  getAll,
  getStudentById,
  deleteStudent,
  createStudent,
  updateStudent,
};
