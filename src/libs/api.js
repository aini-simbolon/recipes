const {default : axios} = require ("axios")

export const api = axios.create ({
    baseURL: "http://localhost:5000/api"
});

export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    
    else {
        delete api.defaults.headers.common["Authorization"]
    } 
};