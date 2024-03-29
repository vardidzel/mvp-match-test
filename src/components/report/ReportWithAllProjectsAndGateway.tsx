import {Accordion} from "react-bootstrap";
import AccordionItem from "../accordion-item/AccordionItem";
import PageTitle from "../page-title/PageTitle";
import {Doughnut} from "react-chartjs-2";
import ChartLegend from "../chart-legend/ChartLegend";
import {GroupedReport} from "../../interfaces/report.interface";
import {displayNumber} from "../../utils/format.util";

interface Props {
    reportGroups: GroupedReport[];
}

const ReportWithAllProjectsAndGateway = ({reportGroups}: Props) => {
    return (
        <div className="row align-items-baseline mt-4">
            <div className="col-md-6 component-bg">
                <PageTitle title={
                    `All projects | ${reportGroups[0].reports[0].gateway.label}`
                }/>
                <Accordion>
                    {reportGroups.map((group: GroupedReport) => {
                        return (
                            <AccordionItem
                                group={group}
                                key={group?.data?.id}
                            />
                        )
                    })}
                </Accordion>
            </div>
            <div className="col-md-6">
                <ChartLegend reportGroups={reportGroups}/>
                <div className="chart-container mx-auto">
                    <Doughnut
                        data={
                            {
                                labels: reportGroups.map((item) => item.data.label),
                                datasets: [{
                                    data: reportGroups.map((item) => item.amount),
                                    backgroundColor: reportGroups.map((item) => item.color)
                                }],
                            }
                        }
                    />
                </div>
                <div className="component-bg text text-dark font-weight-bold">
                    GATEWAY TOTAL | {displayNumber(reportGroups.reduce((sum, item) => sum + item.amount, 0))} USD
                </div>
            </div>
        </div>
    )
}

export default ReportWithAllProjectsAndGateway;
