const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      default: () => new ObjectId().toString(),
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    listingId: { type: mongoose.Schema.Types.ObjectId, ref: "Listing" },
    startDate: { type: Date },
    endDate: { type: Date },
    totalPrice: { type: Number },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    listing: { type: mongoose.Schema.Types.ObjectId, ref: "Listing" },
  },
  { timestamps: true }
);

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
