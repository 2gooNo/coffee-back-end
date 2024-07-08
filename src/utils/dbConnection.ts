import mongoose from "mongoose";

export default async function connectTodoDB() {
  await mongoose.connect(
    "mongodb+srv://new_user:test_password@tuguno.mzidixd.mongodb.net/coffeeApp?retryWrites=true&w=majority&appName=TuguNO"
  );
  console.log("Coffee app  database connected");
}
