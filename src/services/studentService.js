const studentModel = require("../models/studentModel");
/// Get All Students
exports.getAllStudents = (cb) => {
studentModel.getStudents(cb);
};

/// Create New Student
exports.createNewStudent = (data, cb) => {
studentModel.createStudent(data, cb);
};

/// Get  Student By Name
exports.getStudentBySName = (name, cb) => {
studentModel.getStudentByName(name, cb);
};

/// Delete Student By ID
exports.deleteStudentByID = (id, cb) => {
studentModel.deleteStudent(id, cb);
};

/// Update Student By ID
exports.updateStudentByID = (id, data, cb) => {
studentModel.updateStudent(id, data, cb);
};
