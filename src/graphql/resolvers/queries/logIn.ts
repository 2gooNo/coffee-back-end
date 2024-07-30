import { logIn } from "@/services/userService";
import { LoginInput } from "@/generated";

export const getOneUser = async (
  _: unknown,
  { input }: { input: LoginInput }
) => {
  try {
    const token = await logIn(input);

    return { token: token };
  } catch (err) {
    return err;
  }
};
