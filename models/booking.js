var mongoose = require('mongoose');

var bookingSchema = mongoose.Schema({
  bookingDate: {type: Date, required: true},
  confirmed: Boolean,
  rejected: Boolean,
  totalPrice: Number,
  listingName: String,
  requesterName: String,
  requester: {type: mongoose.Schema.Types.ObjectId,
          red: 'User'},
  listingOwner: {type: mongoose.Schema.Types.ObjectId,
          red: 'User'},
  listing: {type: mongoose.Schema.Types.ObjectId,
          red: 'Listing'}
})

mongoose.model('Booking', bookingSchema);
