import { CreateUserInput } from "@/generated";
import { UserModel } from "@/models/userModel";
import { GetOneUserInput } from "@/generated";
import bcrypt from "bcrypt";

export const create = async (input: CreateUserInput) => {
  console.log(input);
  const hashedPassword = await bcrypt.hash(input?.password || "", 10);

  try {
    await UserModel.create({
      fullName: input?.fullName,
      email: input?.email,
      password: hashedPassword,
      avatar: input?.avatar,
      favotites: [],
      adress: "",
      paymentInfo: {},
      createdOn: new Date(),
    });
    const allUser = await UserModel.find();

    return allUser;
  } catch (err) {
    return err;
  }
};
export const getAll = async () => {
  try {
    const allUser = await UserModel.find();
    return allUser;
  } catch (err) {
    return err;
  }
};
export const getOne = async (input: GetOneUserInput) => {
  console.log(input);

  try {
    const allUser = await UserModel.findById(input?.userId);
    console.log(allUser);

    return allUser;
  } catch (err) {
    return err;
  }
};
