import { CreateUserInput } from "@/generated";
import { UserModel } from "@/models/userModel";
import { GetOneUserInput } from "@/generated";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
  // console.log(input);

  try {
    if (typeof input.password === "string") {
      const oneUser = await UserModel.findOne({ email: input?.email });
      console.log("oneUser", oneUser);
      console.log("input?.password=", input?.password);
      const match = await bcrypt.compare(input.password, oneUser.password);

      if (match) {
        const token = jwt.sign(
          { userId: oneUser._id, email: oneUser.email },
          "MySuperDuperPrivateKey",
          {
            expiresIn: "72h",
          }
        );
        return token;
      } else {
        return new Error("Password is wrong");
      }
    } else {
      return "password not match ";
    }
  } catch (err) {
    return err;
  }
};
