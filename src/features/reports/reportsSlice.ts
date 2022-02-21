import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {generateReport} from "../../services/reportsAPI";
import {Report, ReportBody} from "../../interfaces/report.interface";
import {ReportState} from "./reports.interface";

const initialState: ReportState = {
    reports: [],
    status: 'idle'
};

export const reportsAsync = createAsyncThunk(
    'reports/generateReport',
    async (body: ReportBody) => {
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

export default reportsSlice.reducer;
