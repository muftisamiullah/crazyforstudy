import axios from 'axios';
import { apiUrl, authAxios } from '../config/config'


export async function getCountries(data) {
    try {
        const res = await axios.get(apiUrl + 'student/getcountries')
        if(res.status === 200){
            return res.data;
        }
    }
    catch(e){
        if(e.response.status === 401){
            return null;
        }
    }
}

export async function getUser(data) {
    try {
        const res = await authAxios.post(apiUrl + 'student/get-user', data)
        if(res.status === 200){
            return res.data;
        }
    }
    catch(e){
        if(e.response.status === 401){
            return null;
        }
    }
}
export async function editUserProfile(data) {
    try {
        console.log(data);
        const res = await authAxios.post(apiUrl + 'student/edit-user-profile', data)
        if(res.status === 200){
            return res.data;
        }
    }
    catch(e){
        if(e.response.status === 401){
            return null;
        }
    }
}

