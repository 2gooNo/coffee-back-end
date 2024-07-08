import { getOne } from "@/services/userService";
import { GetOneUserInput } from "@/generated";

export const getOneUser = async (
  _: unknown,
  { input }: { input: GetOneUserInput }
) => {
  try {
    const allUser = await getOne(input);
    console.log(allUser);

    return allUser;
  } catch (err) {
    return err;
  }
};
