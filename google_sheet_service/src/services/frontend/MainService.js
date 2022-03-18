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

// kanchvum e getGoogleSheets methody vory veradardznum e googleSheetsService - object - y.

// googleSheetsService - y stexcvum e constructorum;

// constructory class - i standart methodneric e vory kanchvum e ayn jamanak erb vor mer classic stexcvum e nor object

// constructorum stexcvum e googleSheetsService-y vory jarangum e GoogleSheetsService classic, poxancum enq apiService objecty vory jarangum e ApiServic classic

// -> ApiService.js