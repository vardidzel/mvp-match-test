import PageTitle from "../page-title/PageTitle";
import {Report} from "../../interfaces/report.interface";

interface FullReportProps {
    reports: Report[];
}

const ReportWithProjectAndGateway = ({reports}: FullReportProps) => {
    let sum = 0;
    return (
        <>
            <div className="component-bg mt-4">
                <PageTitle title={
                    `${reports[0].project.label} | ${reports[0].gateway.label}`
                }/>
                {/*<Accordion>*/}
                {/*    {reports.map((report: Report) => {*/}
                {/*        sum += report.amount;*/}
                {/*        return (*/}
                {/*            <AccordionItem*/}
                {/*                group={report}*/}
                {/*                key={group.id}*/}
                {/*            />*/}
                {/*        )*/}
                {/*    })}*/}
                {/*</Accordion>*/}
            </div>
            <div className="component-bg text text-dark font-weight-bold mt-4">
                TOTAL: {sum.toFixed(2)} USD
            </div>
        </>
    )
}

export default ReportWithProjectAndGateway;
