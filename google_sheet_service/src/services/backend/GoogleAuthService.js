import { google } from "googleapis";

export class GoogleAuthService {

    get config() {
        return this.configService.googleAuth;
    }

    client;

    constructor(configService) {
        this.configService = configService;
        this.client = new google.auth.OAuth2(this.config.clientId, this.config.clientSecret);
        this.client.setCredentials({
            refresh_token: this.config.refreshToken,
        });
    }

    getClient() {
        return this.client;
    }
}