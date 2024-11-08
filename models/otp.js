const mongoose = require("mongoose");

const OTPSchema = new mongoose.Schema({
  username: { type: String, required: true },
  otp: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 300 }, // Expires after 5 minutes
});

module.exports = mongoose.model("OTP", OTPSchema);
