const express = require("express");

const {getClubDetails} = require("../controllers/clubsDetailsController");

const router = express.Router();

router.get("/:club_id", getClubDetails);

module.exports = router;