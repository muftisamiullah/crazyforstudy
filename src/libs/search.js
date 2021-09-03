import axios from 'axios';
import { apiUrl } from '../config/config'

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
        
        const res = await axios.all([
            axios.post(apiUrl + 'books/search-chapter-question',{search:searchT, limit:params.limit}),
            axios.get(apiUrl + 'books/search-book-name-isbn/'+searchT+'/'+params.limit),
            axios.post(apiUrl + 'question/search-question',{search:searchT, limit:params.limit})
        ])
        return {'data1':res[0].data,'data2':res[1].data,'data3':res[2].data};
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