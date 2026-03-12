const studentModel = require("../models/studentModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const JWT_SECRET = process.env.JWT_SECRATE_KEY;

/// Register with Email & Password
exports.registerStudent = async (data, cb) => {
const hashed = await bcrypt.hash(data.password, 10);
studentModel.createStudent(
{ name: data.name, email: data.email, password: hashed },
cb
);
};

/// Login with Email & Password
exports.loginStudent = (email, password, cb) => {
studentModel.getStudentByEmail(email, async (err, result) => {
if (result.length === 0) {
return cb("Invalid email");
}
const student = result[0];
const match = await bcrypt.compare(password, student.password);
if (!match) {
return cb("Invalid password");
}
const token = jwt.sign(
{ id: student.id, email: student.email },
JWT_SECRET,
{ expiresIn: "10d" }
);
cb(null, { token, student });
});
};
