const Ticket = require('../models/Ticket');

exports.bookTicket = async (req, res) => {
  const { name, slot, timing, bookingDate } = req.body;

  try {
    const newTicket = new Ticket({ name, slot, timing, bookingDate });
    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTicketById = async (req, res) => {
  try {
    
    const obj = {ticketId:req.params.ticketId}
    console.log(obj)
    const ticket = await Ticket.findOne(obj);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
    res.json(ticket);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
