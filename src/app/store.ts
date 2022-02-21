import {configureStore} from '@reduxjs/toolkit';
import metadataReducer from '../features/metadata/metadataSlice';
import reportsReducer from '../features/reports/reportsSlice';

export const store = configureStore({
    reducer: {
        metadata: metadataReducer,
        report: reportsReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
