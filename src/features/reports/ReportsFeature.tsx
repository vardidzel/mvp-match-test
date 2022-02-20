import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {Report, reportsAsync, selectReports} from "./reportsSlice";
import ReportSwitch from "../../components/report/ReportSwitch";

const ReportsFeature = () => {
    const [filters, setFilters] = useState<Record<string, string | undefined>>({});
    const reports: Report[] = useAppSelector(selectReports);
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const filters: Record<string, string | undefined> = {
            projectId: searchParams.get('projectId') ?? undefined,
            gatewayId: searchParams.get('gatewayId') ?? undefined,
            from: searchParams.get('from') ?? undefined,
            to: searchParams.get('to') ?? undefined
        };
        setFilters(filters);
        dispatch(reportsAsync(filters));
    }, [searchParams, dispatch]);

    return (
        <ReportSwitch
            allGatewaysSelected={!filters.gatewayId}
            allProjectsSelected={!filters.projectId}
            reports={reports}
        />
    )
}
export default ReportsFeature;
