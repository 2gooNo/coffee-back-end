import formidable from "formidable-serverless";
import { v2 as cloudinary } from "cloudinary";
import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

cloudinary.config({
  cloud_name: "diswmbmtl",
  api_key: "897949857238179",
  api_secret: "nh7Krzy-bFqaDaKa2F6a7B3Jfo0",
  secure: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

type Data = {
  message: string;
  url?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  // if (req.method !== "POST") {
  //   res.setHeader("Allow", ["POST"]);
  //   res.status(405).end("Method " + req.method + " Not Allowed");
  //   return;
  // }

  const form = new formidable.IncomingForm();

  form.parse(req, async (err: any, fields: any, files: any) => {
    console.log("0");

    const file = files.file;

    console.log("1");
    console.log(file);

    try {
      console.log(file.path);

      const result = await cloudinary.uploader.upload(file.path, {
        public_id: undefined,
      });
      console.log(result);

      console.log("2");

      res.status(200).json({
        message: "File uploaded successfully.",
        url: result.url,
      });
      console.log({ result });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        message: "Error uploading the file.",
      });
    }
  });
};

export default handler;
