import { ConfigService } from './ConfigService';
import { GoogleAuthService } from './GoogleAuthService';
import { GoogleSheetsService } from './GoogleSheetsService';

export class MainService {

    constructor() {
        this.configService = new ConfigService();
        this.googleAuthService = new GoogleAuthService(this.configService);
        this.googleSheetsService = new GoogleSheetsService(this.configService, this.googleAuthService);
    }

    static instance;

    static getInstance() {
        if (!this.instance) {
            this.instance = new MainService();
        }

        return this.instance;
    }

    getSheets() {
        return this.googleSheetsService;
    }
}
