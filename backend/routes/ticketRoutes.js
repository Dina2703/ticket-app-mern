const express = require("express");
const router = express.Router();
const {
  getTickets,
  getTicket,
  createTicket,
  deleteTicket,
  updateTicket,
} = require("../controllers/ticketController");

const { protect } = require("../middleware/AuthMiddleware");

//router.route("/") - route() allows us chain methods like .post().get().delete() to the same route
router.route("/").get(protect, getTickets).post(protect, createTicket);
//route for single ticket
router
  .route("/:id")
  .get(protect, getTicket)
  .delete(protect, deleteTicket)
  .put(protect, updateTicket);

module.exports = router;
