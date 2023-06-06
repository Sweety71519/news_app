import React, { Component } from 'react'
import NewsItem from './NewsItem'

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
     response= await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&language=${this.props.language}&pageSize=20&sortBy=publishedAt&apiKey=8952923338724a5fb6c690e2d2fa8252`)
    //  response=await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}&language=hi&sortBy=publishedAt&apiKey=18716650747c46788c0058f2e48014f6`)
   else
    response= await fetch(`https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&pageSize=20&sortBy=publishedAt&apiKey=8952923338724a5fb6c690e2d2fa8252`)
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
      </div>
    )
  }
}

