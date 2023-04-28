import axios from "axios";

export const API = axios.create({
    baseURL: `https://api.kontenbase.com/query/api/v1/705e4776-0fee-4135-8467-14130402a53c`,
});

export function setAuthorization(token) {
    if (!token) {
        delete API.defaults.headers.common;
        return;
    }
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}