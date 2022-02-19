import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {getGateways, getProjects} from "../../services/filtersAPI";

type Status = 'idle' | 'loading' | 'failed';

export interface Gateway {
    gatewayId: string;
    userIds: string[];
    name: string;
    type: string;
    apiKey: string;
    secondaryApiKey: string;
    description: string;
}

export interface Project {
    projectId: string;
    userIds: string[];
    rule: string;
    gatewayIds: string[];
    structure: string;
    industry: string;
    website: string;
    description: string;
    image: string;
    name: string;
}

export interface FilterOption {
    id: string;
    label: string;
}

interface OptionState {
    status: Status;
    data: FilterOption[];
}

export interface FiltersState {
    gateway: OptionState;
    project: OptionState;
}

const initialState: FiltersState = {
    gateway: {
        status: 'idle',
        data: []
    },
    project: {
        status: 'idle',
        data: []
    }
};

export const gatewaysAsync = createAsyncThunk(
    'filter/getGateways',
    async () => {
        const response = await getGateways();
        return response.data.map(({gatewayId, name}: Gateway) => ({
            id: gatewayId,
            label: name
        }));
    }
);

export const projectsAsync = createAsyncThunk(
    'filter/getProjects',
    async () => {
        const response = await getProjects();
        return response.data.map(({projectId, name}: Project) => ({
            id: projectId,
            label: name
        }));
    }
);

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(gatewaysAsync.pending, (state) => {
                state.gateway.status = 'loading';
            })
            .addCase(gatewaysAsync.fulfilled, (state, action) => {
                state.gateway.status = 'idle';
                state.gateway.data = action.payload;
            })
            .addCase(projectsAsync.pending, (state) => {
                state.project.status = 'loading'
            })
            .addCase(projectsAsync.fulfilled, (state, action) => {
                state.project.status = 'idle';
                state.project.data = action.payload
            });
    },
});

export const selectGateways = (state: RootState) => state.filter.gateway.data;
export const selectGatewaysStatus = (state: RootState) => state.filter.gateway.status;

export const selectProjects = (state: RootState) => state.filter.project.data;
export const selectProjectsStatus = (state: RootState) => state.filter.project.status;

export default filterSlice.reducer;
