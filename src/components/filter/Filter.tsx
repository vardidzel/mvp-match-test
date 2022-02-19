import Form from 'react-bootstrap/Form'
import {FilterOption} from "../../features/filter/filterSlice";
import DatePicker from "react-datepicker";
import {useState} from "react";

import "react-datepicker/dist/react-datepicker.css";
import Select from "../select/Select";

interface FilterProps {
    projects: FilterOption[];
    gateways: FilterOption[];
}

const Filter = ({projects, gateways}: FilterProps) => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    return (
        <div className="d-flex align-items-center">
            <div className="text">Reports</div>
            <div className="filter">
                <Select options={projects} value="Default projects"/>
                <Select options={gateways} value="Default gateways"/>
                <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    maxDate={endDate}
                />
                <DatePicker
                    selected={endDate}
                    onChange={(date: Date) => setEndDate(date)}
                    minDate={startDate}
                />
                <button className="btn btn-primary">Generate report</button>
            </div>
        </div>
    )
}
export default Filter;
