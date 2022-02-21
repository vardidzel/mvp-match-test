import {Option} from "./option.interface";

export interface Report {
    paymentId: string;
    amount: number;
    projectId: string;
    gatewayId: string;
    userIds: string[];
    modified: string;
    created: string;
    project: Option;
    gateway: Option;
}

export interface GroupedReport {
    data: Option;
    reports: Report[];
    amount: number;
    color: string;
}

export interface ReportBody {
    projectId: string | undefined;
    gatewayId: string | undefined;
    from: string | undefined;
    to: string | undefined;
}
