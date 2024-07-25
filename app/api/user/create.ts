import { Prisma } from "@prisma/client";
import { SHA256 as sha256 } from "crypto-js";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    // create user
    await createUserHandler(req, res);
  } else {
    return res.status(405).json({ message: "Method Not allowed" });
  }
}

const hashPassword = (string: string): string => {
  return sha256(string).toString();
};

// function to create user in our database
async function createUserHandler(req: NextApiRequest, res: NextApiResponse) {
  const errors = [];
  const { password } = req.body;

  if (password.length < 6) {
    errors.push("password length should be more than 6 characters");
    return res.status(400).json({ errors });
  }
  try {
    const user = await prisma.user.create({
      data: { ...req.body, password: hashPassword(req.body.password) },
    });
    return res.status(201).json({ user });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return res.status(400).json({ message: e.message });
      }
      return res.status(400).json({ message: e.message });
    }
  }
}
