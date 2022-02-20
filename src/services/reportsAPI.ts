import api from "./index";

export const generateReport = (body: any) => {
    return api.post('/report', body).then((res) => res.data);
}
