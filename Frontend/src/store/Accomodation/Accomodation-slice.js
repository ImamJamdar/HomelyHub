import { createSlice } from "@reduxjs/toolkit";

const accomodationSlice = createSlice({
    name: "accomodation",
    initialState: {
        accomodation: [], // Note: Typo, should be 'accommodation' if used consistently
        loading: false,
        errors: null,
    },
    reducers: {
        getAccomodationRequest(state) {
            state.loading = true;
        },
        getAccomodation(state, action) {
            state.accomodation = action.payload;
            state.loading = false;
        },
        getErrors(state, action) {
            state.errors = action.payload;
            state.loading = false;
        },
    },
    // The slice object closes here
});

export const accomodationActions = accomodationSlice.actions;
export default accomodationSlice;