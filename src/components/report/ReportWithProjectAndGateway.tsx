import PageTitle from "../page-title/PageTitle";
import {Report} from "../../interfaces/report.interface";
import ReportsTable from "../reports-table/ReportsTable";
import {displayNumber} from "../../utils/format.util";

interface Props {
    reports: Report[];
}

const ReportWithProjectAndGateway = ({reports}: Props) => {
    let sum = reports.reduce((sum, report) => sum + report.amount, 0);
    return (
        <>
            <div className="component-bg mt-4">
                <PageTitle title={
                    `${reports[0].project.label} | ${reports[0].gateway.label}`
                }/>
                <ReportsTable reports={reports}/>
            </div>
            <div className="component-bg text text-dark font-weight-bold mt-4">
                TOTAL: {displayNumber(sum)} USD
            </div>
        </>
    )
}

export default ReportWithProjectAndGateway;
