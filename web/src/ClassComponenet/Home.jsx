import React, { Component } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

export default class Home extends Component {
  constructor(){
    super()
    this.state={
    articles:[],
    totalresults:0,
    page:1

    }
  }
  getApiData =async()=>{
    try{
     var response =""
   if(this.props.search!=="")
     response= await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&page=1&language=${this.props.language}&pageSize=20&sortBy=publishedAt&apiKey=8952923338724a5fb6c690e2d2fa8252`)
    //  response=await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&language=hi&sortBy=publishedAt&apiKey=18716650747c46788c0058f2e48014f6`)
   else
    response= await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&page=1&language=${this.props.language}&pageSize=20&sortBy=publishedAt&apiKey=8952923338724a5fb6c690e2d2fa8252`)
    //  response=await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=hi&sortBy=publishedAt&apiKey=18716650747c46788c0058f2e48014f6`)
     response=await response.json()
     this.setState({
      articles:response.articles,
      totalresults:response.totalresults
     })
     console.log("response",response);
    }
    catch{

    }

  }
  fetchMoreData=async()=>{
    try{
      this.setState({page:this.state.page+1})
      var response =""
    if(this.props.search!=="")
      response= await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&page=${this.state.page}&language=${this.props.language}&pageSize=20&sortBy=publishedAt&apiKey=8952923338724a5fb6c690e2d2fa8252`)
     //  response=await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&language=hi&sortBy=publishedAt&apiKey=18716650747c46788c0058f2e48014f6`)
    else
     response= await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&page=${this.state.page}&language=${this.props.language}&pageSize=20&sortBy=publishedAt&apiKey=8952923338724a5fb6c690e2d2fa8252`)
     //  response=await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=hi&sortBy=publishedAt&apiKey=18716650747c46788c0058f2e48014f6`)
      response=await response.json()
      this.setState({
       articles:this.state.articles.concat(response.articles),
      })
      console.log("response",response);
     }
     catch{
 
     }

  }
  componentDidMount(){
   this.getApiData()
  }

  componentDidUpdate(old){
    if(this.props!==old){
      this.getApiData()
    }
  }
  render() {
    return (
      <div className='container-fluid'>
        <h5 className='background text-light text-center p-2 mt-2'>{this.props.q} News</h5>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length}
          loader={<div className='my-5 text-center'>
            <div className="spinner-border m-5" role="status">
            <span className="visually-hidden">Loading...</span>
            </div>
          </div>}
        >
        <div className="row">
         {
          this.state.articles?.map((item,index)=>{
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
}

