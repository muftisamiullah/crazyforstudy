import axios from 'axios';
import { apiUrl, authAxios } from '../config/config'

export async function setLogin(data) {
    try {
        const res = await axios.post(apiUrl + 'student/login',data)
        if(res.status === 200){
            return res.data;
        }
    }
    catch(e){
        if(e.response.status === 401){
            return 401;
        }
    }
}

export async function setSignUp(data) {
    try {
        const res = await axios.post(apiUrl + 'student/register', data)
        if(res.status === 200){
            return res;
        }
    }
    catch(e){
        if(e.response.status === 409){
            return 409
        }
    }
}

export async function saveGoogleUser(data){
    try {
        const res = await axios.post(apiUrl + 'student/savegoogle', data)
        return res;
        // if(res.status === 200){
        //     return res;
        // }
    }
    catch(e){
        if(e.response.status === 409){
            return e.response
        }
    }
}
export async function sendResetEmail(email){
    try{
        const res = await axios.post(apiUrl + 'student/sendreset', {email:email})
        return res;
    }catch(e){
        return e
        console.log(e)
    }
}
export async function verifyOtp(otp){
    try{
        const res = await axios.post(apiUrl + 'student/verifyotp', {otp:otp})
        return res;
    }catch(e){
        return e
        console.log(e)
    }
}
export async function changePassword(pass, id, otp){
    try{
        const res = await axios.post(apiUrl + 'student/changepassword', {password:pass, id:id, otp:otp})
        return res;
    }catch(e){
        return e
        console.log(e)
    }
}

export async function signOut() {
    try {
        const res = await authAxios.post(apiUrl + 'student/logout')
        return res
    }
    catch(e){
        console.log(e)
    }
}