import {Option} from "../../features/metadata/metadataSlice";
import {useEffect, useState} from "react";

import "react-datepicker/dist/react-datepicker.css";
import Select from "../select/Select";
import DatePicker from "../date-picker/DatePicker";
import './Filter.scss';

export interface FilterState {
    projectId?: string;
    gatewayId?: string;
    from?: Date;
    to?: Date;
}

interface FilterProps {
    projects: Option[];
    gateways: Option[];
    onFilter: (filters: FilterState) => void;
    filters?: FilterState;
    onFilterChange?: (filters: FilterState) => void;
}

const Filter = ({projects, gateways, filters, onFilterChange, onFilter}: FilterProps) => {
    const [filterState, setFilterState] = useState<FilterState>({...filters});

    const updateFilterState = (name: string, value: Date | string) => {
        setFilterState({
            ...filterState,
            [name]: value
        })
    }

    const handleFilters = () => onFilter(filterState);

    useEffect(() => onFilterChange?.(filterState), [filterState, onFilterChange]);

    return (
        <>
            <div className="d-flex align-items-center justify-content-between mt-32">
                <div className="text text-dark font-weight-bold text-lg">Reports</div>
                <div className="filter d-flex align-items-center ml-auto">
                    <div className="projects-select-wrapper me-3">
                        <Select
                            options={projects}
                            defaultValue="All projects"
                            value={filterState.projectId}
                            onChange={(value) => updateFilterState('projectId', value)}
                        />
                    </div>
                    <div className="gateways-select-wrapper me-3">
                        <Select
                            options={gateways}
                            value={filterState.gatewayId}
                            defaultValue="All gateways"
                            onChange={(value) => updateFilterState('gatewayId', value)}
                        />
                    </div>
                    <div className="datepicker-wrapper me-3">
                        <DatePicker
                            selected={filterState.from}
                            maxDate={filterState.to}
                            onChange={(date: Date) => updateFilterState('from', date)}
                            placeholderText="From date"
                        />
                    </div>
                    <div className="datepicker-wrapper me-3">
                        <DatePicker
                            selected={filterState.to}
                            minDate={filterState.from}
                            onChange={(date: Date) => updateFilterState('to', date)}
                            placeholderText="To date"
                        />
                    </div>
                    <button
                        onClick={handleFilters}
                        className="btn btn-primary text-nowrap"
                    >
                        Generate report
                    </button>
                </div>
            </div>
            <div className="text text-muted font-weight-bold">
                Easily generate a report of your transactions
            </div>
        </>
    )
}
export default Filter;
