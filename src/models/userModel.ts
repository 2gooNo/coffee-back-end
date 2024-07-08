import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  avatar: String,
  favotites: [String],
  paymentInfo: {
    cardHolder: String,
    cardNumber: String,
    expirationDate: String,
    cvv: String,
  },
  adress: String,
});

export const UserModel =
  mongoose.models.user || mongoose.model("user", userSchema);
