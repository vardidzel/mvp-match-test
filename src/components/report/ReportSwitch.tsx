import {Report} from "../../features/reports/reportsSlice";
import {Doughnut} from 'react-chartjs-2';
import {ArcElement, Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Option} from "../../features/metadata/metadataSlice";
import {FullReport} from "./FullReport";

Chart.register(ArcElement);

interface ReportSwitchProps {
    allGatewaysSelected: boolean;
    allProjectsSelected: boolean;
    reports: Report[];
}

export interface GroupedReport {
    data: Option;
    reports: Report[];
    amount: number;
}

type ReportKeys = 'gateway' | 'project';

const ReportSwitch = ({allGatewaysSelected, allProjectsSelected, reports}: ReportSwitchProps) => {
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
        }));
    }

    if (allGatewaysSelected && allProjectsSelected) {
        const data = groupBy(reports, 'project');
        return <FullReport reportGroups={data}/>
    }

    if (allProjectsSelected && !allGatewaysSelected) {
        const data = groupBy(reports, 'project');
        return <div style={{width: 270}}>
            <Doughnut
                data={
                    {
                        labels: data.map((item) => item.data.label),
                        datasets: [{
                            data: data.map((item) => item.amount),
                            backgroundColor: ['red', 'blue']
                        }],
                    }
                }
                plugins={[ChartDataLabels]}
            />
        </div>
    }

    if (!allProjectsSelected && allGatewaysSelected) {
        const data = groupBy(reports, 'gateway');
        console.log(data);
        return <div>Project, All</div>
    }

    console.log(reports);

    return <div>Project, Gateway</div>
}

export default ReportSwitch;
