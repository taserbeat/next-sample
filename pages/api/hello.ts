import type { NextApiRequest, NextApiResponse } from "next";

type HelloResponse = {
  name: string;
};

// /api/helloで呼ばれた時の挙動を実装する
export default (req: NextApiRequest, res: NextApiResponse<HelloResponse>) => {
  console.log(`server received request: ${req.method} ${req.url}`);

  // ステータス200で{"name": "John Doe"}を返す
  res.status(200).json({ name: "John Doe" });
};
