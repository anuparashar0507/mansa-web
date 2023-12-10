// Dependencies
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { NextApiRequest, NextApiResponse } from "next";
const sheetId = process.env.SHEET_ID!;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  //   try {
  const ServiceAccountAuth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const spreadsheet = new GoogleSpreadsheet(sheetId, ServiceAccountAuth);
  await spreadsheet.loadInfo();
  console.log("sheet :", spreadsheet);
  const sheet = spreadsheet.sheetsByIndex[0]!;
  const rows = await sheet.getRows();
  console.log("ROWS :", rows);
  // if (rows) {
  // res.json(JSON.stringify({ error: false, count: rows }));
  res.status(200).json({ count: sheet });
  // }
  //   }
}
