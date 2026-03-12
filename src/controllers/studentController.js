const studentService = require("../services/studentService");

/// Get All Students
exports.getStudents = (req, res) => {
studentService.getAllStudents((err, data) => {
if (err) return res.status(500).json(err);
res.status(200).json(data);
});
};

/// Add New Student
exports.createStudent = (req, res) => {
studentService.createNewStudent(req.body, (err, result) => {
if (err) return res.status(500).json(err);
res.status(201).json({ message: "Student created",
    result
});
});
};

/// Delete Student By ID
exports.deleteStudent = (req, res) => {
studentService.deleteStudentByID(req.params.id, (err) => {
if (err) return res.status(500).json(err);
res.status(201).json({ message: "Student deleted" ,

});
});
};
