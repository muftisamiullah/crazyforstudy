import Header from '../../components/website/home/header'
import Navbar from '../../components/website/home/navbar'
import Footer from '../../components/website/home/footer'
import Follow from '../../components/website/home/follow'
import SearchTab from '../../components/website/search/search-tab'
import ResultsNotFound from '../../components/website/search/result-not-found'
import ResultsFound from '../../components/website/search/result-found'
import BuySubscription from '../../components/website/search/buy-subscription'
import HowItWorks from '../../components/common/how-it-works'
import { useRouter } from "next/router";
import { useQuery } from 'react-query'
import { searchData,searchDataIndividual, searchDataIndividualQ } from '../../libs/search'
import { useState } from 'react'

export default function Search() {
    const router = useRouter();
    const [pageNoQ, setPageNoQ] = useState(0);
    const [pageNoB, setPageNoB] = useState(0);
    
    // const { data:searchDataBQ, isLoading:searchIsLoading, error:searchError } = useQuery([router.query.search], () => searchData({searchText:router.query.search,pageno : pageNo}),{staleTime:Infinity})
    const { data:searchDataB, isLoading:searchBIsLoading, error:searchBError } = useQuery([router.query.search, pageNoB], () => searchDataIndividual({searchText:router.query.search,pageno : pageNoB, limit:10}),{staleTime:Infinity})
    const { data:searchDataQ, isLoading:searchQIsLoading, error:searchQError } = useQuery([router.query.search, pageNoQ, 'question'], () => searchDataIndividualQ({searchText:router.query.search,pageno : pageNoQ, limit:10}),{staleTime:Infinity})

    if(searchQIsLoading)
        return <div id="loading"></div>

    return(
        <>
            <Header/>
            <Navbar/>
            <SearchTab/>
            {searchDataB && <ResultsFound dataB={searchDataB} dataQ={searchDataQ} resultsFor={router.query.search} setPageNoQ={setPageNoQ} pageNoQ={pageNoQ} setPageNoB={setPageNoB} pageNoB={pageNoB}/>}
            {/* {!searchDataBQ && <ResultsNotFound/>} */}
            <BuySubscription/>
            <HowItWorks/>
            <Follow/>
            <Footer/>
        </>
    )
}