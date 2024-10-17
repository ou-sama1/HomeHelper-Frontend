import axios from "axios";
// const baseUrl = import.meta.env.VITE_BASE_URL;
const baseUrl = "http://127.0.0.1:8000/api";
import api from "../utils/Api";

async function signup(user) {
    const response = await api.post('register', user);
    return response.data
}

async function login(user) {
    const response = await api.post('login', user);
    return response.data
}

async function logout(){
    const response = await api.post('logout');
    return response.data;
}

async function getUser(){
    const response = await api.get('user');
    return response.data;
}

export {
    signup,
    login,
    logout,
    getUser,
}