import axios from 'axios';
// import { getSession } from 'next-auth/client'

// const apiUrl = `http://127.0.0.1:8080/web/v1/`;
let apiUrl = '';
let imageUrl = '';
if(process.env.NODE_ENV === 'production'){
    apiUrl = `${process.env.REACT_APP_LIVE_URL_basePath}/web/v1/`;
    // imageUrl = `${process.env.REACT_APP_LIVE_URL_basePath}/uploads/`;
    imageUrl = 'https://crazyforstudy.s3.ap-south-1.amazonaws.com/uploads/';
}else{
   // apiUrl = `${process.env.REACT_APP_LOCAL_URL_basePath}/web/v1/`;
   apiUrl = `http://127.0.0.1:8000/web/v1/`;
    // imageUrl = `${process.env.REACT_APP_LOCAL_URL_basePath}/uploads/`;
    imageUrl = `https://crazyforstudy.s3.ap-south-1.amazonaws.com/uploads/`;
}

// apiUrl = `http://127.0.0.1:8000/web/v1/`;

const config = {
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "https://www.crazyforstudy.com",
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
    },
};

const authAxios = axios.create(config);

authAxios.interceptors.request.use(async function(config) {
    config.headers.Authorization = localStorage.getItem('access_token') ?
        `Bearer ${localStorage.getItem('access_token')}` :
        ``;
    return config;
});

export { apiUrl, axios, authAxios, imageUrl };