import {FilterOption} from "../../features/filter/filterSlice";
import Form from "react-bootstrap/Form";

interface SelectProps {
    options: FilterOption[];
    value: string;
}

const Select = ({ options, value }: SelectProps) => {
    return (
        <Form.Select>
            <option>{value}</option>
            {options?.map((option: FilterOption) => (
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
