import {Report} from "../../interfaces/report.interface";
import {Status} from "../../interfaces/status.type";

export interface ReportState {
    reports: Report[];
    status: Status;
}
