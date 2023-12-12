import { google, Auth } from 'googleapis';
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

// Define the Zod schema for User data
const UserSchema = z.object({
  timestamp: z.string(),
  name: z.string().optional(),
  age: z.string(),
  gender: z.string(),
  'mobile number': z.string(),
  'whatsapp number': z.string(),
  'e-mail id': z.string().optional(),
  'jnv name': z.string(),
  'state name': z.string(),
  'batch passout': z.string(),
  'current occupation & designation': z.string(),
  'current location': z.string(),
  'home district': z.string(),
  't-shirt size': z.string(),
  'do you want to volunteer/participation in event(e.g.: career guidance, job opportunities, cultural, etc)': z.string().optional(),
  'your expectations from the event or suggestions for the event': z.string().optional(),
  'need accomodation for 06th jan 2024': z.string(),
});

type User = z.infer<typeof UserSchema>;

type ApiResponse = {
  count: number;
  users: User[];
  message?: string; // Add the 'message' property with optional type 'string'
};

const auth: Auth.GoogleAuth = new google.auth.GoogleAuth({
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

    if (!response.data) {
      throw new Error('Invalid response received.');
    }

    const rows: string[][] | undefined = (response.data.values as string[][]) || [];
    if (rows.length === 0) {
      throw new Error('No data found.');
    }

    const headers = rows.shift()!;

    // Parse and validate rows using Zod schema
    const users: User[] = rows.map((row) => {
      const userObject: Record<string, unknown> = {}; // Specify any as the type of the property value
      headers.forEach((header, index) => {
        userObject[header.toLowerCase()] = row[index];
      });
      const parsedUser = UserSchema.parse(userObject);
      return parsedUser;
    });

    res.status(200).json({ count: users.length, users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ count: 0, // Set count to 0 as no data is available
    users: [], // Set users to an empty array
    message: 'Internal server error',});
  }
}
