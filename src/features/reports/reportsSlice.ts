import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {generateReport} from "../../services/reportsAPI";
import {Option} from "../metadata/metadataSlice";

type Status = 'idle' | 'loading' | 'failed';

export interface Report {
    paymentId: string;
    amount: number;
    projectId: string;
    gatewayId: string;
    userIds: string[];
    modified: string;
    created: string;
    project: Option;
    gateway: Option;
}

export interface FiltersState {
    reports: Report[];
    status: Status;
}

const initialState: FiltersState = {
    reports: [],
    status: 'idle'
};

export const reportsAsync = createAsyncThunk(
    'reports/generateReport',
    async (body: any) => {
        const response = await generateReport(body);
        return response.data;
    }
);

export const reportsSlice = createSlice({
    name: 'reports',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(reportsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(reportsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.reports = action.payload;
            });
    },
});

export const selectReports = (state: RootState): Report[] => state.report.reports.map((report: Report) => ({
    ...report,
    project: state.metadata.project.mapping[report.projectId],
    gateway: state.metadata.gateway.mapping[report.gatewayId]
}));
export const selectReportsStatus = (state: RootState) => state.report.status;

export default reportsSlice.reducer;
