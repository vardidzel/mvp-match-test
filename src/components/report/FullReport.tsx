import {Accordion} from "react-bootstrap";
import AccordionItem from "../accordion-item/AccordionItem";
import PageTitle from "../page-title/PageTitle";
import {GroupedReport} from "../../interfaces/report.interface";
import {displayNumber} from "../../utils/format.util";

interface Props {
    reportGroups: GroupedReport[];
}

const FullReport = ({reportGroups}: Props) => {
    let sum = 0;
    return (
        <>
            <div className="component-bg mt-4">
                <PageTitle title="All projects | All gateways"/>
                <Accordion>
                    {reportGroups.map((group: GroupedReport) => {
                        sum += group.amount;
                        return (
                            <AccordionItem
                                group={group}
                                showGatewayField={true}
                                key={group.data.id}
                            />
                        )
                    })}
                </Accordion>
            </div>
            <div className="component-bg text text-dark font-weight-bold mt-4">
                TOTAL: {displayNumber(sum)} USD
            </div>
        </>
    )
}
export default FullReport;
