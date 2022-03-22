import { MainService} from "../../src/services/backend/MainService";

export default async function updateSpreadsheet(req, res) {
  if (req.method === 'POST') {
    const googleSheetsService = MainService.getInstance().getSheets();
    let status = 200;
    let response;
    try {
      const res = await googleSheetsService.updateData(req.body);
      response = {
        success: true,
        res: res
      };

    } catch (e) {
      status = 400;

      response = {
        success: false,
        message: e.message,
      };
    }

    res.status(status).json(response);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
