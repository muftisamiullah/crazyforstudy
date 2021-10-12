import axios from 'axios';
import { apiUrl } from '../config/config'

export async function getFaqCategory() {
    try {
        const res = await axios.get(apiUrl + 'faq/get-faq-category')
        return res.data;
    }
    catch(e){
        
    }
}

export async function getCategoryFaqs(param) {
    try {
        const res = await axios.get(apiUrl + 'faq/get-category-content/'+param)
        return res.data;
    }
    catch(e){
        
    }
}