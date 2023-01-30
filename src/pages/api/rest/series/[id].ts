// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import series from "@/data/series.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;
  if (!id) {
    res.status(200).json(series);
  } else {
    res.status(200).json(series[Number(id) - 1]);
  }
}
