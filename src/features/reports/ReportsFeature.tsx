import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {reportsAsync, selectIsLoading, selectReports} from "./reportsSlice";
import ReportSwitch from "../../components/report/ReportSwitch";
import {Report, ReportBody} from "../../interfaces/report.interface";

const ReportsFeature = () => {
    const [filters, setFilters] = useState<ReportBody>({} as ReportBody);
    const reports: Report[] = useAppSelector(selectReports);
    const loading: boolean = useAppSelector(selectIsLoading);
    const [searchParams] = useSearchParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const filters: ReportBody = {
            projectId: searchParams.get('projectId') ?? '',
            gatewayId: searchParams.get('gatewayId') ?? '',
            from: searchParams.get('from') ?? '',
            to: searchParams.get('to') ?? ''
        };
        setFilters(filters);
        dispatch(reportsAsync(filters));
    }, [searchParams, dispatch]);

    return (
        <ReportSwitch
            allGatewaysSelected={!filters.gatewayId}
            allProjectsSelected={!filters.projectId}
            reports={reports}
            isLoading={loading}
        />
    )
}
export default ReportsFeature;
