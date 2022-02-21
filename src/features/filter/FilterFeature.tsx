import Filter from "../../components/filter/Filter";
import {useEffect, useMemo} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {gatewaysAsync, projectsAsync, selectGateways, selectProjects} from "../metadata/metadataSlice";
import {useSearchParams} from "react-router-dom";
import {formatDate, toDate} from "../../utils/date.util";
import {Option} from "../../interfaces/option.interface";
import {FilterState} from "../../interfaces/filter.interface";

const FilterFeature = () => {
    const gateways: Option[] = useAppSelector(selectGateways);
    const projects: Option[] = useAppSelector(selectProjects);
    const dispatch = useAppDispatch();

    const [searchParams, setSearchParams] = useSearchParams();

    const filters: FilterState = useMemo(() => ({
        projectId: searchParams.get('projectId') ?? undefined,
        gatewayId: searchParams.get('gatewayId') ?? undefined,
        from: toDate(searchParams.get('from')),
        to: toDate(searchParams.get('to')),
    }), [searchParams]);

    useEffect(() => {
        dispatch(gatewaysAsync());
        dispatch(projectsAsync());
    }, [dispatch]);

    return (
        <Filter
            gateways={gateways}
            projects={projects}
            filters={filters}
            onFilter={(filters: FilterState) => {
                const params = new URLSearchParams({
                    projectId: filters.projectId ?? '',
                    gatewayId: filters.gatewayId ?? '',
                    from: formatDate(filters.from),
                    to: formatDate(filters.to)
                });
                setSearchParams(params);
            }}
        />
    )
}
export default FilterFeature;
