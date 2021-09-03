import axios from 'axios';
import { apiUrl, authAxios } from '../config/config'

export async function saveAssignment(data) {
    try {
        const res = await authAxios.post(apiUrl + 'assignment/save-assignment', data)
        return res.data;
    }
    catch(e){
        
    }
}

export async function saveAssignment2(data) {
    try {
        const res = await authAxios.put(apiUrl + 'assignment/save-assignment2', data)
        return res.data;
    }
    catch(e){
        
    }
}

export async function saveAssignmentLocal(data) {
    try {
        const res = await authAxios.post(apiUrl + 'assignment/save-local-assignment',data)
        return res.data;
    }
    catch(e){
        
    }
}

export async function getAssignmentInfo(id, user_Id) {
    try {
        const data = {id: id, user_Id: user_Id}
        const res = await authAxios.post(apiUrl + `assignment/get-assignment-info`, data)
        return res.data;
    }
    catch(e){
        
    }
}

export async function getAllAssignments(user_Id) {
    try {
        const data = {user_Id: user_Id}
        const res = await authAxios.post(apiUrl + `assignment/get-assignment-all`, data)
        return res.data;
    }
    catch(e){
        
    }
}
