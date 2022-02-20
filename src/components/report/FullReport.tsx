import {Accordion} from "react-bootstrap";
import {GroupedReport} from "./ReportSwitch";
import AccordionItem from "../accordion-item/AccordionItem";
import PageTitle from "../page-title/PageTitle";

interface FullReportProps {
    reportGroups: GroupedReport[];
}

export const FullReport = ({reportGroups}: FullReportProps) => {
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
                                key={group.data.id}
                            />
                        )
                    })}
                </Accordion>
            </div>
            <div className="component-bg text text-dark font-weight-bold mt-4">
                TOTAL: {sum.toFixed(2)} USD
            </div>
        </>
    )
}