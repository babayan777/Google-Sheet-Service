import { HttpService } from '../common/HttpService';
import { CONTENT_TYPES, HEADERS } from '../common/consts';

const PATHS = {
    UPDATE_SPREADSHEET: '/api/update-spreadsheet',
};

export class ApiService extends HttpService {

    post(path, headers, body) {
        headers = {
            [HEADERS.CONTENT_TYPE]: CONTENT_TYPES.JSON,
            ...headers
        };

        return super.post(path, headers, body);
    }

    updateSpreadSheet(values, spreadsheet) {
        return this.post(
            PATHS.UPDATE_SPREADSHEET, null , {values, spreadsheet}
        );
    }
}

// amboxj pathery grum enq ste

// unenq post method vory stanum e path, headers, body, heto kanchum e ira tsnox classi HttpService - i post methody

// unenq naev updateSpreadSheet stanum e valuenery, spreadSheet kanchum e mer APiservice i post methodin poxancelov
// pathy, headers - y null vortev arden ka postum, body(values,spreadsheet)

// -> HTTP

