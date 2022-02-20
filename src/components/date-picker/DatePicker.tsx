import ReactDatePicker from "react-datepicker";

interface DatePickerProps {
    onChange: (date: Date) => void;
    selected?: Date;
    minDate?: Date;
    maxDate?: Date;
    placeholderText?: string;
}

const DatePicker = ({selected, minDate, maxDate, onChange, placeholderText}: DatePickerProps) => {
    return (
        <ReactDatePicker
            selected={selected}
            minDate={minDate}
            maxDate={maxDate}
            onChange={onChange}
            className="form-control bg-secondary text-white text-sm"
            placeholderText={placeholderText}
        />
    )
}
export default DatePicker;
