import axios from 'axios';
import { apiUrl, authAxios } from '../config/config'

export async function createSubscription(data) {
    try {
        const res = await authAxios.post(apiUrl + 'payment/razorpay-create-subs')
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

export async function saveTransactionDetails(data) {
    try {
        const res = await authAxios.post(apiUrl + 'payment/save-transaction', data)
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

export async function saveTransactionDetailsForAssignment(data) {
    try {
        console.log("Dadasd")
        const res = await authAxios.post(apiUrl + 'payment/save-transaction-assignment', data)
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

export async function createOrder(amt) {
    try {
        const res = await authAxios.post(apiUrl + 'payment/razorpay-create-order',{amt:amt})
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