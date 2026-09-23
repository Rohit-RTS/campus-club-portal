const db = require("../config/db");

const getClubs = (req, res) => {

    const sql = "SELECT * FROM clubs";

    db.query(sql, (err, result) => {
          
        if (err) {
            console.log(err);

            return res.status(500).json({
                message: "Database Error"
            });
        }
      console.log(result);
        res.status(200).json(result);
    });
};

module.exports = {
    getClubs
};