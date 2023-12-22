// // utils/googleSheets.ts
// import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet';

// interface GoogleSheetsConfig {
//   googleServiceAccountEmail: string;
//   googlePrivateKey: string;
//   sheetId: string;
// }

// interface GoogleSheetsData {
//   rowCount: number;
//   data: {
//     column1: string;
//     column2: string;
//     // Add other columns as needed
//   }[];
// }

// export async function getGoogleSheetsData(config: GoogleSheetsConfig): Promise<GoogleSheetsData> {
//   try {
//     const doc = new GoogleSpreadsheet(config.sheetId);

//     await doc.useServiceAccountAuth({
//       client_email: config.googleServiceAccountEmail,
//       private_key: config.googlePrivateKey.replace(/\\n/g, '\n'),
//     }, config.googleServiceAccountEmail);

//     await doc.loadInfo();

//     const sheet = doc.sheetsByIndex[0];

//     const rowCount = await sheet.rowCount();
//     const rows: GoogleSpreadsheetRow[] = await sheet.getRows();

//     const data = rows.map((row) => ({
//       column1: row.column1,
//       column2: row.column2,
//       // Add other columns as needed
//     }));

//     return {
//       rowCount,
//       data,
//     };
//   } catch (error) {
//     console.error('Error in getGoogleSheetsData:', error);
//     throw new Error('Failed to fetch data from Google Sheets');
//   }
// }
