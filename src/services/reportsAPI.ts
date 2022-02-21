import api from "./index";
import {ReportBody} from "../interfaces/report.interface";

export const generateReport = (body: ReportBody) => {
    return api.post('/report', body).then((res) => res.data);
}
