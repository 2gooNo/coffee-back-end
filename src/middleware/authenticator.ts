import jwt from "jsonwebtoken";

export const verifyToken = (_: unknown, { input }: { input: any }) => {
  const token = input.token;

  if (!token) {
    return "User Token Required";
  }
  try {
    const decoded = jwt.verify(token, "MySuperDuperPrivateKey");
    return decoded;
  } catch (err) {
    return "User Token Wrong or Unactive";
  }
};
