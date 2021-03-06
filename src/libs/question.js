import axios from 'axios';
import { apiUrl,authAxios } from '../config/config'

export async function askAQuestion(formData) {
    try {
        const res = await authAxios.post(apiUrl + 'student/ask-question', formData)
        return res;
    }
    catch(e){
        return e
    }
}

export async function getQuestions(body, flag) {
    try {
        flag = flag == 'all' ? '' : flag;
        const res = await authAxios.get(apiUrl + `student/user-question/${flag}`, body)
        return res.data;
    }
    catch(e){
        
    }
}

export async function getNotifications(body, isRead) {
    try {
        // isRead = isRead == 'all' ? '' : isRead;
        const res = await authAxios.get(apiUrl + `student/user-notify/${isRead}`, body)
        return res.data;
    }
    catch(e){
        
    }
}

export async function readNotification(id) {
    try {
        const res = await authAxios.patch(apiUrl + `student/update-notification/${id}`)
        return res.data;
    }
    catch(e){
        
    }
}

export async function getMyTextBooks(id) {
    try {
        // isRead = isRead == 'all' ? '' : isRead;
        const res = await authAxios.get(apiUrl + `student/my-textbook`, id)
        return res.data;
    }
    catch(e){
        
    }
}


export async function addTextBooks(isbn) {
    try {
        const res = await authAxios.post(apiUrl + `student/check-book-isbn`, {isbn:isbn})
        return res.data;
    }
    catch(e){
        
    }
}


export async function getMySubscription( id ) {
    try {
        const res = await authAxios.get(apiUrl + `student/my-subscription-details`, id)
        return res.data.data;
    }
    catch(e){

    }
}

export async function deleteTextBook( user_Id, id ) {
    try {
        const res = await authAxios.post(apiUrl + `student/my-textbook-del`,{id: id, user_Id: user_Id});
        return res.data;
    }
    catch(e){

    }
}

export async function askForSolutionQANDA(question_id,email,id,link) {
    try {
        const data = {}; 
        data.q_id = question_id;
        data.email = email;
        data.user_Id = id;
        data.link = link;
        const res = await authAxios.post(apiUrl + 'student/ask-already-present-question', data)
        return res;
    }
    catch(e){
        
    }
}