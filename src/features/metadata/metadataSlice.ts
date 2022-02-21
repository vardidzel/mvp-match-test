import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {getGateways, getProjects} from "../../services/filtersAPI";
import {Project} from "../../interfaces/project.interface";
import {Gateway} from "../../interfaces/gateway.interface";
import {Option} from "../../interfaces/option.interface";
import {MetadataState} from "./metadata.interface";

const initialState: MetadataState = {
    gateway: {
        status: 'idle',
        data: [],
        mapping: {}
    },
    project: {
        status: 'idle',
        data: [],
        mapping: {}
    }
};

export const gatewaysAsync = createAsyncThunk(
    'metadata/getGateways',
    async () => {
        const response = await getGateways();
        return response.data.map(({gatewayId, name}: Gateway) => ({
            id: gatewayId,
            label: name
        }));
    }
);

export const projectsAsync = createAsyncThunk(
    'metadata/getProjects',
    async () => {
        const response = await getProjects();
        return response.data.map(({projectId, name}: Project) => ({
            id: projectId,
            label: name
        }));
    }
);

export const metadataSlice = createSlice({
    name: 'metadata',
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
                state.gateway.mapping = action.payload.reduce(
                    (result: Record<string, Option>, item: Option) => {
                        return {...result, [item.id]: item}
                    }, {}
                );
            })
            .addCase(projectsAsync.pending, (state) => {
                state.project.status = 'loading'
            })
            .addCase(projectsAsync.fulfilled, (state, action) => {
                state.project.status = 'idle';
                state.project.data = action.payload;
                state.project.mapping = action.payload.reduce(
                    (result: Record<string, Option>, item: Option) => {
                        return {...result, [item.id]: item}
                    }, {}
                );
            });
    },
});

export const selectGateways = (state: RootState) => state.metadata.gateway.data;
export const selectProjects = (state: RootState) => state.metadata.project.data;

export default metadataSlice.reducer;
