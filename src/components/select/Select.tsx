import Form from "react-bootstrap/Form";
import {Option} from "../../interfaces/option.interface";

interface SelectProps {
    options: Option[];
    defaultValue: string;
    value?: string;
    onChange: (value: string) => void;
}

const Select = ({options, defaultValue, value, onChange}: SelectProps) => {
    return (
        <Form.Select
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className="bg-secondary text-white text-sm"
        >
            <option value="">{defaultValue}</option>
            {options?.map((option: Option) => (
                <option
                    value={option.id}
                    key={option.id}
                >
                    {option.label}
                </option>
            ))}
        </Form.Select>
    )
}

export default Select;
