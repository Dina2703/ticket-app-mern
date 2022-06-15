const express = require("express");
const router = express.Router({ mergeParams: true });
const { getNotes, addNote } = require("../controllers/noteController");

const { protect } = require("../middleware/AuthMiddleware");

router.route("/").get(protect, getNotes).post(protect, addNote);
module.exports = router;

//we need to hit the endpoint: /api/tickets/:ticketId/notes
