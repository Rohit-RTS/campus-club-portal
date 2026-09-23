const db = require("../config/db");

const registerUser = (req, res) => {

    console.log(req.body);

    const {
        name,
        email,
        password,
        department,
        year,
        phone,
        rollNumber
    } = req.body;

    const role = "student";

    const sql = `
        INSERT INTO users
        (name, email, password, role, department, year, phone, rollNumber)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            name,
            email,
            password,
            role,
            department,
            year,
            phone,
            rollNumber
        ],

        (err, result) => {

            if (err) {
                console.log(err);

                return res.status(500).json({
                    message: "Database Error"
                });
            }

            res.status(201).json({
                message: "Registration successful"
            });

        }
    );
};



module.exports = { registerUser };