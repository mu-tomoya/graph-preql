// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import precure from "@/data/precure.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;
  if (!id) {
    res.status(200).json(precure);
  } else {
    res.status(200).json(precure[Number(id) - 1]);
  }
}
