import { google } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';

type User = {
    name: string;
    batch: string;
    passout: string;
    [key: string]: any;
  };
  
type ApiResponse ={
  count: number;
  users: User[];
}

const auth = new google.auth.GoogleAuth({
  keyFile: 'register.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

const sheets = google.sheets({ version: 'v4', auth });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  try {
    const spreadsheetId = '1BPl82fRjKsHy7fIBnJboCKgWqko5Gn8PWYpXL5Vl6b8';
    const range = 'Form Responses 1';
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values;
    if (!rows || rows?.length === 0) {
      throw new Error('No data found.');
    }

    const headers = rows.shift() as string[];
    const users: User[] = rows.map((row) => {
        let user = {} as User;
        headers.forEach((header, index) => {
          user[header.toLowerCase()] = row[index];
        });
        return user;
      });
      

    res.status(200).json({ count: users.length, users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
