import axios from 'axios';
import { apiUrl } from '../config/config'

export async function getBook(param) {
    try {
        const res = await axios.get(apiUrl + 'books/book/'+param.book_isbn)
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

export async function getProblems(param) {
    try {
        const res = await axios.get(apiUrl + 'books/book/chapter/section/exercise/problem/'+param.book_isbn+'/'+param.chapter_no+'/'+param.section_no+'/'+param.exercise_no)
        return res.data.problems;
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

export async function getProblemsDirectly(param) {
    try {
        const res = await axios.get(apiUrl + 'books/book/only-problem/'+param.book_isbn+'/'+param.chapter_no)
        return res.data.problems;
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