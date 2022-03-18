export class GoogleSheetsService{

  constructor(apiService) {
    this.apiService = apiService;
  }

  async updateSheet(values, spreadsheet) {

    return await this.apiService.updateSpreadSheet(values, spreadsheet);
  }
}

// constructor-y yndunum e apiService u classi apiServicin veragrum e poxancvac arjeqy

// stexcum enq updateSheet function vorin noric poxancum enq values, spreadsheet

// veradarcum e function updateSpreadSheet vory kanchel enq apiServicum