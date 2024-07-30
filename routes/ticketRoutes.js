const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

router.post('/book', ticketController.bookTicket);
router.get('/tickets', ticketController.getAllTickets);
router.get('/ticket/:ticketId', ticketController.getTicketById);

module.exports = router;
