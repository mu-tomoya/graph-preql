// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import precure from "@/data/series.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;
  res.status(200).json(precure[id - 1]);
}
