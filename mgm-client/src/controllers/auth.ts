import connection from "../services/connection";
import { AxiosResponse } from "axios";

export function loginController(email: string, password: string) {
    //Send request to server for login method
    return connection
        .post("/auth/login", {
            email: email,
            password: password,
        })
        .then((response: AxiosResponse) => {
            return response;
        })
        .catch((error: any) => {
            return error.response;
        });
}
