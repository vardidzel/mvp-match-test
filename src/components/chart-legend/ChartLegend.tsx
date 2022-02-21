import './ChartLegend.scss';
import {GroupedReport} from "../../interfaces/report.interface";

const ChartLegend = ({reportGroups}: any) => {
    return <div className="component-bg d-flex align-items-center">
        {reportGroups.map((group: GroupedReport) => {
            return <div className="d-flex align-items-center" key={group.color}>
                <div className="legend-circle" style={{backgroundColor: group.color}}/>
                <div className="text-sm text-dark me-5">{group.data.label}</div>
            </div>
        })}
    </div>
}
export default ChartLegend;
