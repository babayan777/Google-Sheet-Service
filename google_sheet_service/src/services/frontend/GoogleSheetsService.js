export class GoogleSheetsService{

  constructor(apiService) {
    this.apiService = apiService;
  }

  async updateSheet(values, spreadsheet) {

    return await this.apiService.updateSpreadSheet(values, spreadsheet);
  }
}