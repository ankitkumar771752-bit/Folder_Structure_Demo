const authService = require("../services/authService");

/// Register with Email & Password
exports.register = (req, res) => {
authService.registerStudent(req.body, (err) => {
if (err) return res.status(500).json(err);
res.status(201).json({ message: "Student registered" });
});
};

/// Login with Email & password
exports.login = (req, res) => {
const { email, password } = req.body;
authService.loginStudent(email, password, (err, data) => {
if (err) return res.status(401).json({ message: err });
res.status(201).json(data);
});
};
