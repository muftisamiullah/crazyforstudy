import axios from 'axios';
import { apiUrl } from '../config/config'
import {GetName} from '../components/common/make-slug'

export async function getBooks( param ) {
    try {
        let pagination = {pageno : param.pageno, limit: 12}
        // const sub_subject = GetName(param.sub_subject_name);
        const res = await axios.post(apiUrl + `books/subject/${param.subject_name}/${param.sub_subject_name}`, pagination)
        return res.data;
    }
    catch(e){

    }
}

export async function getRandomQuestions( param ) {
    try {
        // const sub_subject = GetName(param.sub_subject_name);
        const res = await axios.post(apiUrl + `subsubject/get-random-questions/${param.subject_name}/${param.sub_subject_name}/${param.limit}`)
        return res.data;
    }
    catch(e){

    }
}

export async function getSubSubject( param ) {
    try {
        const res = await axios.get(apiUrl + `subsubject/${param}`)
        return res.data;
    }
    catch(e){

    }
}

export async function getSubjects( param ) {
    try {
        const res = await axios.get(apiUrl + `subsubject/all`)
        return res.data;
    }
    catch(e){

    }
}

export async function askQuestion( param ) {
    try {
        const res = await axios.get(apiUrl + `/ask-question`)
        return res.data;
    }
    catch(e){

    }
}

export async function getAllSubSubject() {
    try {
        const res = await axios.get(apiUrl + `subsubject`)
        return res.data;
    }
    catch(e){

    }
}

export async function getChildSubjects(param) {
    try {
        const res = await axios.get(apiUrl + `subsubject/childsubjects/${param}`)
        return res.data;
    }
    catch(e){

    }
}

export async function getQandAChildSubjects(param) {
    try {
        let pagination = {pageno : param.pageno, limit: 10}
        const res = await axios.post(apiUrl + `subsubject/questions/${param.child_subject}`,pagination)
        return res.data;
    }
    catch(e){

    }
}

export async function getQandAChildSubjects2(param) {
    try {
        let pagination = {pageno : param.pageno, limit: 10}
        const res = await axios.post(apiUrl + `subsubject/questions/${param.subject}/${param.sub_subject}`,pagination)
        return res.data;
    }
    catch(e){

    }
}

export async function getQandAnswer(param, subscription) {
    try {
        if(subscription == "true"){
            const res = await axios.post(apiUrl + `subsubject/get-answer-sub/${param}`)
            return res.data.data;
        }else{
            const res = await axios.post(apiUrl + `subsubject/get-answer/${param}`)
            return res.data.data;
        }
    }
    catch(e){

    }
}