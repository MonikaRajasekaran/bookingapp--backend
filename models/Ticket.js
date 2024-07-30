const mongoose = require('mongoose');
const shortid = require('shortid');



const TicketSchema = new mongoose.Schema({
  ticketId: {
    type: String,
    'default': shortid.generate
  },
  name: { type: String, required: true },
  slot: { type: String, enum: ['Screen1', 'Screen2', 'Screen3'], required: true },
  timing: { type: String, required: true },
  bookingDate:{type: Date,  required: true},
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', TicketSchema);
