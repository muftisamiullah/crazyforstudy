import Header from '../../components/website/home/header'
import Navbar from '../../components/website/home/navbar'
import Footer from '../../components/website/home/footer'
import Follow from '../../components/website/home/follow'
import SearchTab from '../../components/website/search/search-tab'
import ResultsNotFound from '../../components/website/search/result-not-found'
import ResultsFound from '../../components/website/search/result-found'
import BuySubscription from '../../components/website/search/buy-subscription'
import HowItWorks from '../../components/common/how-it-works'
import { useQuery } from 'react-query'
import { searchData,searchDataIndividual, searchDataIndividualQ, searchDataIndividualQandA } from '../../libs/search'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Marquee from '../../components/common/marquee';

export default function Search() {
    const params = useParams();
    const [pageNoQ, setPageNoQ] = useState(0);
    const [pageNoB, setPageNoB] = useState(0);
    
    // const { data:searchDataBQ, isLoading:searchIsLoading, error:searchError } = useQuery([router.query.search], () => searchData({searchText:router.query.search,pageno : pageNo}),{staleTime:Infinity})
    const { data:searchDataB, isLoading:searchBIsLoading, error:searchBError } = useQuery([params.search, pageNoB], () => searchDataIndividual({searchText:params.search,pageno : pageNoB, limit:12}),{staleTime:Infinity})
    const { data:searchDataQ, isLoading:searchQIsLoading, error:searchQError } = useQuery([params.search, pageNoQ, 'question'], () => searchDataIndividualQ({searchText:params.search,pageno : pageNoQ, limit:12}),{staleTime:Infinity})
    const { data:searchDataQanA, isLoading:searchQandAIsLoading, error:searchQandAError } = useQuery([params.search, pageNoQ, 'question-qanda'], () => searchDataIndividualQandA({searchText:params.search,pageno : pageNoQ, limit:12}),{staleTime:Infinity})
    
    // if(searchQIsLoading)
    //     return <div id="loading"></div>

    return(
        <>
            <Marquee/>
            <Header/>
            <Navbar/>
            <SearchTab/>
            <ResultsFound dataB={searchDataB} dataQ={searchDataQ} dataQandA={searchDataQanA} resultsFor={params.search} setPageNoQ={setPageNoQ} pageNoQ={pageNoQ} setPageNoB={setPageNoB} pageNoB={pageNoB} searchBIsLoading={searchBIsLoading} searchQIsLoading={searchQIsLoading} searchQandAIsLoading={searchQandAIsLoading}/>
            {/* {!searchDataBQ && <ResultsNotFound/>} */}
            <BuySubscription/>
            <HowItWorks/>
            <Follow/>
            <Footer/>
        </>
    )
}