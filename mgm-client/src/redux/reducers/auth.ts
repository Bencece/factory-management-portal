import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { loginController } from "../../controllers/auth";

export interface AuthState {
    //Declaration of the auth state
    authenticated: boolean;
    user: {
        id?: number;
        firstName?: string;
        lastName?: string;
        email?: string;
    };
    accessToken: string;
}

const initialState: AuthState = {
    //Initial state with the default values
    authenticated: false,
    user: {},
    accessToken: "",
};

export const loginAction = createAsyncThunk(
    "auth/login",
    async ({ email, password }: { email: string; password: string }) => {
        return await loginController(email, password)
            .then(responseMiddleware)
            .then((response: AxiosResponse) => response.data)
            .catch(() => Promise.reject());
    }
);

export const authSlice = createSlice({
    name: "authenticate",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(loginAction.pending, (state, action) => {
                state.authenticated = false;
                state.user = {};
                state.accessToken = "";
            })
            .addCase(loginAction.rejected, (state, action) => {
                state.authenticated = false;
                state.user = {};
                state.accessToken = "";
            })
            .addCase(loginAction.fulfilled, (state, action) => {
                state.authenticated = true;
                state.user = action.payload.user;
                state.accessToken = action.payload.accessToken;
            });
    },
});

function responseMiddleware(response: AxiosResponse) {
    //Checking if the response is returned with status code 200 or not
    const data = response.data;
    if (response.status !== 200) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }
    return response;
}

export default authSlice.reducer;
