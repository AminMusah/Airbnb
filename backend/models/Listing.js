const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      default: () => new ObjectId().toString(),
    },
    title: { type: String },
    description: { type: String },
    imageSrc: { type: String },
    category: { type: String },
    roomCount: { type: Number },
    bathroomCount: { type: Number },
    guestCount: { type: Number },
    locationValue: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    price: { type: Number },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    reservations: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Reservation" },
    ],
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
