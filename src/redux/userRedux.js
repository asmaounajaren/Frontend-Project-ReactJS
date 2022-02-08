import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
<<<<<<< HEAD
    currentUser: null,
    isFetching: false,
    error: false,
    },
    reducers: {
    loginStart: (state) => {
        state.isFetching = true;
    },
    loginSuccess: (state, action) => {
        state.isFetching = false;
        state.currentUser = action.payload;
    },
    loginFailure: (state) => {
        state.isFetching = false;
        state.error = true;
    },
    },
});

=======
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});
>>>>>>> 21f36d3c3d5b71f7d282e0cd6298ab99e7325601
export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;