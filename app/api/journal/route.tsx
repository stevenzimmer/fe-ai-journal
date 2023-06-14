import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const { body } = req;
  // const { content } = body;
  const user = await getUserByClerkId();
  // console.log({content})

  const entry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: "this is a new entry"
    }
  });

  console.log({entry});

  return NextResponse.json({data: entry});
}