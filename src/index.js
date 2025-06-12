const express = require("express");
const app = express();

// config json response
app.use(express.json());

// Routes
const EmployeesRoutes = require("./routes/EmployeeRoutes.js");
const DepartmentsRoutes = require("./routes/DepartmentsRoutes.js");
const LoginRoutes = require("./routes/LoginRoutes.js");
const SignUpRoutes = require("./routes/SignUpRoutes.js");

app.use("/employee", EmployeesRoutes);
app.use("/departments", DepartmentsRoutes);
app.use("/login", LoginRoutes);
app.use("/signup", SignUpRoutes);

// Server dont restart
app.get("/", (req, res) => {
    res.status(200).json({ message: "Server Online" })
})

app.listen(5000);