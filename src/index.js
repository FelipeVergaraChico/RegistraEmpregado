const express = require("express");
const app = express();

// config json response
app.use(express.json());

// Routes
const EmployeesRoutes = require("./routes/EmployeeRoutes.js");
//const DepartmentsRoutes = require("./routes/departments.js")

app.use("/employee", EmployeesRoutes);
//app.use("/ors", DepartmentsRoutes);

// Server dont restart
app.get("/", (req, res) => {
    res.status(200).json({ message: "Server Online" })
})

app.listen(5000);