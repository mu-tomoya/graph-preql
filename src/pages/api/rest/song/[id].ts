// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import songs from "@/data/songs.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;
  if (!id) {
    res.status(200).json(songs);
  } else {
    res.status(200).json(songs[Number(id) - 1]);
  }
}
