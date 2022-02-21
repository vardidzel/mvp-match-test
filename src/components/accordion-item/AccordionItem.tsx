import {Accordion} from "react-bootstrap";
import {GroupedReport} from "../../interfaces/report.interface";
import ReportsTable from "../reports-table/ReportsTable";
import {displayNumber} from "../../utils/format.util";

interface Props {
    group: GroupedReport;
    showGatewayField?: boolean;
}

const AccordionItem = ({group, showGatewayField}: Props) => {
    return (
        <Accordion.Item eventKey={group.data.id} className="mt-1">
            <Accordion.Header>
                <div className="w-100 d-flex align-items-center justify-content-between">
                    <span className="text text-dark font-weight-bold">{group.data.label}</span>
                    <span className="text text-dark font-weight-bold">{displayNumber(group.amount)} USD</span>
                </div>
            </Accordion.Header>
            <Accordion.Body>
                <ReportsTable reports={group.reports} showGatewayField={showGatewayField} />
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default AccordionItem;
