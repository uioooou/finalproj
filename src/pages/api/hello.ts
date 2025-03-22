import type { NextApiRequest, NextApiResponse } from "next";
import TikTokScraper from "tiktok-scraper";

type ResponseData = {
  success: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ success: false, error: "Method Not Allowed" });
  }

  try {
    
      const posts = await TikTokScraper.trend("", {
        number: 100,
        sessionList: ["sid_tt=58ba9e34431774703d3c34e60d584475;"],
      });
      console.log(posts);

    res.status(200).json({ success: true ,data : posts});
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
}
