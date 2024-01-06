import { google } from "googleapis";
import { JWT } from "google-auth-library";
import type { NextApiRequest, NextApiResponse } from "next";

// Create a new JWT client using the credentials
const client = new JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.PRIVATE_KEY?.replace(/\\n/g, "\n"),
  scopes: ["https://www.googleapis.com/auth/drive.metadata.readonly"],
});

// Authorize and create a Google Drive API instance
const drive = google.drive({ version: "v3", auth: client });
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    // Your folder ID
    const folderId = "1fiQ8HS7atmW8aBNvAxnNs45XcGJBWI9I";

    // Fetch all files inside the folder
    const { data } = await drive.files.list({
      q: `'${folderId}' in parents`,
      fields: "files(id, name, thumbnailLink)",
    });

    res.status(200).json(data.files);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
