import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home(props){
  let [articles,setArticles]=useState([])
  let [totalResults,setTotalResults]=useState(0)
  let [page,setPage]=useState(1)
 
  const getApiData =async()=>{
    try{
     var response =""
     if(props.search!=="")
     response= await fetch(`https://newsapi.org/v2/everything?q=${props.search}&page=${page}&language=${props.language}&pageSize=20&sortBy=publishedAt&apiKey=8952923338724a5fb6c690e2d2fa8252`)
    //  response=await fetch(`https://newsapi.org/v2/everything?q=${props.search}&language=hi&sortBy=publishedAt&apiKey=18716650747c46788c0058f2e48014f6`)
   else
    response= await fetch(`https://newsapi.org/v2/everything?q=${props.q}&page=${page}&language=${props.language}&pageSize=20&sortBy=publishedAt&apiKey=8952923338724a5fb6c690e2d2fa8252`)
    //  response=await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=hi&sortBy=publishedAt&apiKey=18716650747c46788c0058f2e48014f6`)
     response=await response.json()
     setArticles(response.articles)
     setTotalResults(response.totalResults)
     console.log("response",response);
    }
    catch{

    }

  }
  const fetchMoreData=async()=>{
    try{
      setPage(page+1)
      var response =""
    if(this.props.search!=="")
      response= await fetch(`https://newsapi.org/v2/everything?q=${props.search}&page=${page}&language=${props.language}&pageSize=20&sortBy=publishedAt&apiKey=8952923338724a5fb6c690e2d2fa8252`)
     //  response=await fetch(`https://newsapi.org/v2/everything?q=${props.search}&language=hi&sortBy=publishedAt&apiKey=18716650747c46788c0058f2e48014f6`)
    else
     response= await fetch(`https://newsapi.org/v2/everything?q=${props.q}&page=${page}&language=${props.language}&pageSize=20&sortBy=publishedAt&apiKey=8952923338724a5fb6c690e2d2fa8252`)
     //  response=await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=hi&sortBy=publishedAt&apiKey=18716650747c46788c0058f2e48014f6`)
      response=await response.json()
      setArticles(articles.concat(response.articles))
      console.log("response",response);
     }
     catch{
 
     }

  }
  useEffect(()=>{
    getApiData()
  },[props])


  
    return (
      <div className='container-fluid'>
        <h5 className='background text-light text-center p-2 mt-2'>{props.q} News</h5>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<div className='my-5 text-center'>
            <div className="spinner-border m-5" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
          </div>}
        >
        <div className="row">
         {
          articles?.map((item,index)=>{
           return <NewsItem
           key={index}
           name={item.source.name}
           source={item.source.name}
           title={item.title}
           description={item.description}
           urls={item.urls}
           pic={item.urlToImage}
           date={item.publishedAt}
           />
           
          })
         }
        </div>
        </InfiniteScroll>
      </div>
    )
  }

