const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      default: () => new ObjectId().toString(),
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    type: { type: String },
    provider: { type: String },
    providerAccountId: { type: String },
    refresh_token: { type: String },
    access_token: { type: String },
    expires_at: { type: Number },
    token_type: { type: String },
    scope: { type: String },
    id_token: { type: String },
    session_state: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

accountSchema.index({ provider: 1, providerAccountId: 1 }, { unique: true });

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
