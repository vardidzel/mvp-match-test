import api from "./index";

export const getGateways = () => {
    return api.get('/gateways').then((res) => res.data);
}

export const getProjects = () => {
    return api.get('/projects').then((res) => res.data);
}
