import { CreateUserInput } from "@/generated";
import { create } from "@/services/userService";

export const addUser = async (
  _: unknown,
  { input }: { input: CreateUserInput }
) => {
  // console.log(input?.avatar);

  try {
    const allUser = await create(input);
    console.log(allUser);

    return allUser;
  } catch (err) {
    return err;
  }
};
