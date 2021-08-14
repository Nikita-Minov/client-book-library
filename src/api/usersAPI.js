import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mern-library-app-server.herokuapp.com/api',
    withCredentials: true
});

export const usersAPI = {
    registerAccount(username, password) {
        return instance
            .post('/register-account', { username: username, password: password })
            .then((res) => {
                return res.data;
            });
    },
    loginAccount(username, password) {
        return instance
            .post('/login', { username: username, password: password })
            .then((res) => {
                return res.data;
            });
    },
    getMe() {
        return instance
            .get('/me')
            .then((res) => {
                return res.data;
            });
    },
    logout() {
        return instance
            .get('/logout')
            .then((res) => {
                return res.data;
            });
    }
};