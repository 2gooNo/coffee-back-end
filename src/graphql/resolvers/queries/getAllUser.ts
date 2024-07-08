import { getAll } from "@/services/userService";

export const getAllUser = async () => {
  try {
    const allUser = await getAll();
    return allUser;
  } catch (err) {
    return err;
  }
};
