import {Report} from "../../interfaces/report.interface";
import {Table} from "react-bootstrap";
import {displayNumber} from "../../utils/format.util";

interface Props {
    reports: Report[];
    showGatewayField?: boolean;
}

const ReportsTable = ({ reports, showGatewayField }: Props) => {
    return (
        <Table striped hover>
            <thead>
            <tr>
                <th>Date</th>
                {showGatewayField && <th>Gateway</th>}
                <th>Transaction Id</th>
                <th>Amount</th>
            </tr>
            </thead>
            <tbody>
            {reports.map((report: Report) => {
                return (
                    <tr key={report.paymentId}>
                        <td>{report.created.replaceAll('-', '/')}</td>
                        {showGatewayField && <td>{report.gateway.label}</td>}
                        <td>{report.paymentId}</td>
                        <td>{displayNumber(report.amount)} USD</td>
                    </tr>
                )
            })}
            </tbody>
        </Table>
    )
}

export default ReportsTable;
