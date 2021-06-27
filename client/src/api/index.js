const api = require("axios");
var url = "http://api-server:5000/api/students";

function getAll() {
  axios(url).then(function (response) {
    console.log(response);
  });
}

function getStudent(id) {
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
  getStudent,
  deleteStudent,
  createStudent,
  updateStudent,
};
