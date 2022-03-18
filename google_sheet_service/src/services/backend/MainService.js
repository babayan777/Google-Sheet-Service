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

// kanchvum e getSheets() methody vory veradarcnum e MainService classi googleSheetsService - y

// Vory ir hertin stexcvel e constructor um vorpes object poxancum enq configService - y u googleAuthService-y

// incha es configum katarvum

// stex grvum e bolor env nery vory poxancum enq ham googleauthserice in ham googleSheetsService in

// incha google auth um katarvum

// -> Google Auth Services
