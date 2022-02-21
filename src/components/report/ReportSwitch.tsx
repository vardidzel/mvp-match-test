import {ArcElement, Chart} from 'chart.js';
import FullReport from "./FullReport";
import ReportWithProjectAndAllGateways from "./ReportWithProjectAndAllGateways";
import ReportWithAllProjectsAndGateway from "./ReportWithAllProjectsAndGateway";
import ReportWithProjectAndGateway from "./ReportWithProjectAndGateway";
import {GroupedReport, Report} from "../../interfaces/report.interface";
import NoReport from "./NoReport";

Chart.register(ArcElement);

interface Props {
    allGatewaysSelected: boolean;
    allProjectsSelected: boolean;
    reports: Report[];
    isLoading: boolean;
}

type ReportKeys = 'gateway' | 'project';

const ReportSwitch = ({allGatewaysSelected, allProjectsSelected, reports, isLoading}: Props) => {
    const getRand = (): number => Math.floor(Math.random() * 256);

    const getRgb = (): string => {
        return `rgb(${getRand()}, ${getRand()}, ${getRand()})`;
    };

    const groupBy = (data: Report[], field: ReportKeys): GroupedReport[] => {
        const groups = data.reduce((groups, report) => {
            const groupField = report[field].id as string;
            const group = groups[groupField] || [];
            const reports = [...group, report];
            return {...groups, [groupField]: reports}
        }, {} as Record<string, Report[]>);

        return Object.values(groups).map((group) => ({
            data: group[0][field],
            reports: group,
            amount: group.reduce((sum, item) => sum + item.amount, 0),
            color: getRgb()
        }));
    }

    if (isLoading) {
        return <div className="text text-dark font-weight-bold text-center py-5">Loading...</div>;
    }

    if (reports.length === 0) {
        return <NoReport/>;
    }

    if (allGatewaysSelected && allProjectsSelected) {
        const data = groupBy(reports, 'project');
        return <FullReport reportGroups={data}/>
    }

    if (allProjectsSelected && !allGatewaysSelected) {
        const data = groupBy(reports, 'project');
        return <ReportWithAllProjectsAndGateway reportGroups={data}/>
    }

    if (!allProjectsSelected && allGatewaysSelected) {
        const data = groupBy(reports, 'gateway');
        return <ReportWithProjectAndAllGateways reportGroups={data}/>
    }

    return <ReportWithProjectAndGateway reports={reports}/>
}

export default ReportSwitch;
