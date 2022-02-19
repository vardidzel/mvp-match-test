import Filter from "../../components/filter/Filter";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {
    FilterOption,
    gatewaysAsync,
    projectsAsync,
    selectGateways,
    selectProjects
} from "./filterSlice";

const FilterFeature = () => {
    const gateways: FilterOption[] = useAppSelector(selectGateways);
    const projects: FilterOption[] = useAppSelector(selectProjects);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(gatewaysAsync());
        dispatch(projectsAsync());
    }, [dispatch])
    return (
        <>
            <Filter gateways={gateways} projects={projects}/>
        </>
    )
}
export default FilterFeature;
