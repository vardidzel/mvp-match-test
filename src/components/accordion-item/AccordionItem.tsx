import {Accordion, Table} from "react-bootstrap";
import {GroupedReport, Report} from "../../interfaces/report.interface";

interface AccordionItemProps {
    group: GroupedReport;
}

const AccordionItem = ({group}: AccordionItemProps) => {
    return (
        <Accordion.Item eventKey={group.data.id} className="mt-1">
            <Accordion.Header>
                <div className="w-100 d-flex align-items-center justify-content-between">
                    <span className="text text-dark font-weight-bold">{group.data.label}</span>
                    <span className="text text-dark font-weight-bold">{group.amount.toFixed(2)} USD</span>
                </div>
            </Accordion.Header>
            <Accordion.Body>
                <Table striped hover>
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Transaction Id</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {group.reports.map((report: Report) => {
                        return (
                            <tr key={report.paymentId}>
                                <td>{report.created.replaceAll('-', '/')}</td>
                                <td>{report.paymentId}</td>
                                <td>{report.amount.toFixed(2)} USD</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default AccordionItem;
