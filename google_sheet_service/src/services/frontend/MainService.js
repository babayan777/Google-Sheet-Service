import { ApiService } from './ApiService';
import { GoogleSheetsService } from './GoogleSheetsService';

export class MainServiceFront {

  constructor() {
    this.apiService = new ApiService();
    this.googleSheetsService = new GoogleSheetsService(this.apiService);
  }

  static instance;

  static getInstance() {
    if (!this.instance) {
      this.instance = new MainServiceFront();
    }

    return this.instance;
  }

  getGoogleSheets() {
    return this.googleSheetsService;
  }

}
