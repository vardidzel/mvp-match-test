import {Option} from "../../interfaces/option.interface";
import {Status} from "../../interfaces/status.type";

export interface OptionState {
    status: Status;
    data: Option[];
    mapping: Record<string, Option>;
}

export interface MetadataState {
    gateway: OptionState;
    project: OptionState;
}
