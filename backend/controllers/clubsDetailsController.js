
const db = require("../config/db");

const getClubDetails = (req,res)=>{

    const {club_id} = req.params;

    console.log(club_id);

    const sql = `
   SELECT
    c.club_id,
    c.club_name,
    c.description,
    c.category,

    -- Faculty Coordinator
    faculty.user_id AS faculty_id,
    faculty.name AS faculty_name,
    faculty.email AS faculty_email,

    -- Club Head
    head.user_id AS club_head_id,
    head.name AS club_head_name,
    head.email AS club_head_email,

    -- Club Members
    member.user_id AS member_id,
    member.name AS member_name,
    member.email AS member_email,
    member.department AS member_department,
    member.year AS member_year,
    member.roll_number AS member_roll_number,
    member.phone AS member_phone

FROM clubs c

LEFT JOIN users faculty
    ON c.faculty_id = faculty.user_id

LEFT JOIN users head
    ON c.club_head_id = head.user_id

LEFT JOIN club_members cm
    ON c.club_id = cm.club_id

LEFT JOIN users member
    ON cm.user_id = member.user_id

WHERE c.club_id = ?;
`;


    db.query(sql,[club_id],(err,result)=>{
          
        if(err){

            return res.status(500).json({

        message:"Database Error"

            });
        }

          if(result.length === 0){

            return res.status(401).json({
                message:"Club not found"
            });

          }

           res.status(200).json(result[0]);


         

    });

};

module.exports = { getClubDetails };