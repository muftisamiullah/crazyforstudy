import axios from 'axios';
import { apiUrl, SubUrl } from '../config/config'

export async function getNavbarData() {
    try {
        const res = await axios.get(apiUrl + 'category/view-all')
        return res.data.data;
    }
    catch(e){
        
    }
}

export async function getPopularBooks() {
    try {
        const res = await axios.get(apiUrl + 'books/popular-books')
        return res.data.data;
    }
    catch(e){
        
    }
}

export async function getSubContent(subId) {
    try {
        const res = await axios.get(SubUrl + 'subject/view/' + subId)
        return res.data.data;
    }
    catch(e){
        
    }
}

