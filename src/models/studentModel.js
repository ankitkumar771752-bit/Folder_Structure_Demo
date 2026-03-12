const db = require("../config/db");
/// Create Student
exports.createStudent = (data, callback) => {
const sql = "INSERT INTO students(name,email,password) VALUES (?,?,?)";
db.query(sql, [data.name, data.email, data.password], callback);
};

/// Get All Students
exports.getStudents = (callback) => {
const sql = "SELECT * FROM students";
db.query(sql, callback);
};

/// Get Student By Name
exports.getStudentByName = (name, callback) => {
const sql = "SELECT * FROM students WHERE name=?";
db.query(sql, [name], callback);
};

/// Delete Student By ID
exports.deleteStudent = (id, callback) => {
const sql = "DELETE FROM students WHERE id=?";
db.query(sql, [id], callback);
};

/// Update Students By ID
exports.updateStudent = (id, data, callback) => {
const sql = "UPDATE students SET name=?,password=? WHERE id=?";
db.query(sql, [data.name, data.password, id], callback);
};

/// Get Student By Email
exports.getStudentByEmail = (email, callback) => {
const sql = "SELECT * FROM students WHERE email=?";
db.query(sql, [email], callback);
};
