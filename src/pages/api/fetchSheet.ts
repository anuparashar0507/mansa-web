import { google } from "googleapis";
import { JWT } from "google-auth-library";
import type { NextApiRequest, NextApiResponse } from 'next';

// Create a new JWT client using the credentials
const client = new JWT({
    email:  process.env.GOOGLE_CLIENT_EMAIL,
    key: (process.env.PRIVATE_KEY ?? '').replace(/\\n/g, '\n'),
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });
  
  // Authorize and create a Google Sheets API instance
  const sheets = google.sheets({ version: "v4", auth: client });
//   console.log("API KEY :",process.env.PRIVATE_KEY)
  export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    try {
      // Your spreadsheet ID
      const spreadsheetId = "1BPl82fRjKsHy7fIBnJboCKgWqko5Gn8PWYpXL5Vl6b8";
      const range = 'Form Responses 1';
      // Read data from the spreadsheet
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range, // Range to read
      });
  
      const values = response.data.values;
  
      if (!values) {
        // console.log("No data found.");
        res.status(500).json({ count: 0, // Set count to 0 as no data is available
        users: [], // Set users to an empty array
        message: 'No data found.',});    
      } else {
        res.status(200).json({ count: values.length, users:values });
      }
    } catch (error) {
    //   console.error("Error:", error);
      res.status(500).json({ count: 0, // Set count to 0 as no data is available
      users: [], // Set users to an empty array
      message: 'Internal server error',});
    }
    }
  
  