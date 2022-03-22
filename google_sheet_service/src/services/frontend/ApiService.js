import { HttpService } from '../common/HttpService';
import { CONTENT_TYPES, HEADERS } from '../common/consts';

const PATHS = {
    UPDATE_SPREADSHEET: '/api/update-spreadsheet',
};

export class ApiService extends HttpService {

    post(path, body) {
        this.headers = {
            [HEADERS.CONTENT_TYPE]: CONTENT_TYPES.JSON,
        };

        return super.post(path, this.headers, body);
    }

    updateSpreadSheet(values, spreadsheet) {
        return this.post(
            PATHS.UPDATE_SPREADSHEET, {values, spreadsheet}
        );
    }
}
