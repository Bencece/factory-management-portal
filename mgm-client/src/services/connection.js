import axios from "axios";

export default axios.create({
    baseURL:
        process.env.REACT_APP_SERVER_URL +
        ":" +
        process.env.REACT_APP_SERVER_PORT,
    responseType: "json",
    headers: {
        "content-type": "application/json",
    },
});
