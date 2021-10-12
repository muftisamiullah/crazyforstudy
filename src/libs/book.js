import axios from 'axios';
import { apiUrl, authAxios } from '../config/config'

export async function getBook(param) {
    try {
        const res = await axios.get(apiUrl + 'books/book/'+param.book_isbn)
        return res.data.data;
    }
    catch(e){
        
    }
}

export async function askForSoltuion(book_name,chapter_name,section_name,question,q_id,problem_no,email,id) {
    try {
        const data = {}; 
        data.book_name = book_name;
        data.chapter_name = chapter_name;
        data.section_name = section_name;
        data.question = question;
        data.q_id = q_id;
        data.problem_no = problem_no;
        data.email = email;
        data.user_Id = id;
        const res = await authAxios.post(apiUrl + 'books/book/ask-for-solution', data)
        return res.data.data;
    }
    catch(e){
        
    }
}

export async function getChapters(param) {
    try {
        const res = await axios.get(apiUrl + 'books/book/chapter/'+param.book_isbn)
        return res.data.chapters;
    }
    catch(e){
        
    }
}

export async function getSections(param) {
    try {
        const res = await axios.get(apiUrl + 'books/book/chapter/section/'+param.book_isbn+'/'+param.chapter_no)
        return res.data.sections;
    }
    catch(e){
        
    }
}

export async function getExercises(param) {
    try {
        const res = await axios.get(apiUrl + 'books/book/chapter/section/exercise/'+param.book_isbn+'/'+param.chapter_no+'/'+param.section_no)
        return res.data.excerises;
    }
    catch(e){
        
    }
}

export async function getProblems(param, subscription) {
    try {
        if(subscription == "true"){
            const res = await axios.get(apiUrl + 'books/book/chapter/section/exercise/problem/answer/'+param.book_isbn+'/'+param.chapter_no+'/'+param.section_no+'/'+param.exercise_no)
            return res.data.problems;
        }else{
            const res = await axios.get(apiUrl + 'books/book/chapter/section/exercise/problem/'+param.book_isbn+'/'+param.chapter_no+'/'+param.section_no+'/'+param.exercise_no)
            return res.data.problems;
        }
        
    }
    catch(e){
        
    }
}

export async function getRelatedBooks(param) {
    try {
        const res = await axios.get(apiUrl + 'books/related-books/'+param.sub_subject)
        return res.data.data;
    }
    catch(e){
        
    }
}

export async function getProblemsDirectly(param, subscription) {
    try {
        if(subscription == "true"){
            const res = await axios.get(apiUrl + 'books/book/only-problem/answer/'+param.book_isbn+'/'+param.chapter_no)
            return res.data.problems;
        }else{
            const res = await axios.get(apiUrl + 'books/book/only-problem/'+param.book_isbn+'/'+param.chapter_no)
            return res.data.problems;
        }
    }
    catch(e){
        
    }
}

export async function searchQuestions(isbn, search) {
    try {
        const res = await axios.get(apiUrl + 'books/book/search-question/'+isbn+'/'+search)
        return res.data;
    }
    catch(e){
        
    }
}

export async function saveReview(isbn, data) {
    try {
        const res = await authAxios.post(apiUrl + 'reviews/'+isbn, data)
        return res;
    }
    catch(e){
        
    }
}