import axios from 'axios';
import { apiUrl } from '../config/config'
export const CancelToken = axios.CancelToken;
let source = CancelToken.source();
// function regexEscape(string){
//     return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// }

export async function searchData(params) {
    try {
        let searchT = params.search ? params.search : params.searchText;
        
        // const res = await axios.all([
        //     axios.get(apiUrl + 'books/search-chapter-question/'+searchT+'/'+params.limit),
        //     axios.get(apiUrl + 'books/search-book-name-isbn/'+searchT+'/'+params.limit)
        // ])
        // searchT = regexEscape(searchT)
        //passing just 100 chars to backend
        searchT = searchT.substring(0, 100);
        source && source.cancel('Operation canceled due to new request.');
        source = axios.CancelToken.source();
        const res = await axios.all([
            axios.post(apiUrl + 'books/search-chapter-question',{search:searchT, limit:params.limit}, {cancelToken: source.token}),
            axios.get(apiUrl + 'books/search-book-name-isbn/'+searchT+'/'+params.limit, {cancelToken: source.token}),
            axios.post(apiUrl + 'question/search-question',{search:searchT, limit:params.limit}, {cancelToken: source.token})
        ])
        return {'data1':res[0].data,'data2':res[1].data,'data3':res[2].data};
        // console.log(res)
        // return {'data2':res[0].data};
    }
    catch(e){
    }
}

export async function searchBook(params){
    try {
        let searchT = params.search ? params.search : params.searchText;        
        
        //passing just 100 chars to backend
        searchT = searchT.substring(0, 100);
        source && source.cancel('Operation canceled due to new request.');
        source = axios.CancelToken.source();
        const res = axios.get(apiUrl + 'books/search-book-name-isbn/'+searchT+'/'+params.limit, {cancelToken: source.token});
      
       return res
    }
    catch(e){
    }
}

export async function searchChapterQuestions(params){
    try {
        let searchT = params.search ? params.search : params.searchText;
        
        
        //passing just 100 chars to backend
        searchT = searchT.substring(0, 100);
        source && source.cancel('Operation canceled due to new request.');
        source = axios.CancelToken.source();
        const res = axios.post(apiUrl + 'books/search-chapter-question',{search:searchT, limit:params.limit}, {cancelToken: source.token});
        return res
    }
    catch(e){
    }
    
}

export async function searchQuestions(params){
    try {
        let searchT = params.search ? params.search : params.searchText;
        
        //passing just 100 chars to backend
        searchT = searchT.substring(0, 100);
        source && source.cancel('Operation canceled due to new request.');
        source = axios.CancelToken.source();
        const res =  axios.post(apiUrl + 'question/search-question',{search:searchT, limit:params.limit}, {cancelToken: source.token});
       
        return res
    }
    catch(e){
    }
}


export async function searchDataIndividual(params) {
    try {
        const searchT = params.search ? params.search : params.searchText;

        const res = await axios.get(apiUrl + 'books/search-book-name-isbn-individual/'+searchT+'/'+params.limit+'/'+params.pageno)
        return res.data;
    }
    catch(e){
    }
}

export async function searchDataIndividualQ(params) {
    try {
        const searchT = params.search ? params.search : params.searchText;

        const res = await axios.get(apiUrl + 'books/search-chapter-question/'+searchT+'/'+params.limit+'/'+params.pageno)
        return res.data;
        // return {'data1':res[0].data,'data2':res[1].data};
    }
    catch(e){
    }
}

export async function searchDataIndividualQandA(params) {
    try {
        const searchT = params.search ? params.search : params.searchText;

        const res = await axios.get(apiUrl + 'books/search-question-qanda/'+searchT+'/'+params.limit+'/'+params.pageno)
        return res.data;
        // return {'data1':res[0].data,'data2':res[1].data};
    }
    catch(e){
    }
}