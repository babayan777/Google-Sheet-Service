import { google } from 'googleapis';

export class GoogleSheetsService{

    get googleAuth() {
        return this.googleAuthService.getClient();
    }

    sheets

    constructor(configService, googleAuthService) {
        this.configService = configService;
        this.googleAuthService = googleAuthService;
        this.sheets = google.sheets({
            version: 'v4',
            auth: this.googleAuth
        });
    }

    async updateData({ values, spreadsheet }) {
        await this.sheets.spreadsheets.values.append({
            spreadsheetId: this.configService.googleSheets[spreadsheet],
            range: 'A2',
            valueInputOption: 'RAW',
            resource: {
                range: 'A2',
                majorDimension: 'ROWS',
                values: [values]
            }
        });
    }
}
