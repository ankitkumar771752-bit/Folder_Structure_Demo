const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
const token = req.headers.authorization;
if (!token) {
return res.status(401).json({ message: "Token required" });
}
try {
const decoded = jwt.verify(token, process.env.JWT_SECRATE_KEY);
req.user = decoded;
next();
} catch (err) {
res.status(401).json({ message: "Invalid token" });
}
};
