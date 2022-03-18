export class ConfigService {
    constructor() {
        this.googleAuth = {
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
        };
        this.googleSheets = {
            spreadsheetId: process.env.SPREADSHEET_ID,
        };
    }
}