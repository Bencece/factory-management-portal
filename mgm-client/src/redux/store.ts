import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import logger from "redux-logger";

const store = configureStore({
    reducer: { auth: authReducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
