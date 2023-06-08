import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        return (
            <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                <div class="card">
                    {
                        this.props.pic? <img src={this.props.pic} height="200px" class="card-img-top" alt="..."/>: 
                        <img src="/image/No_Image_Available.jpg" height="200px" class="card-img-top" alt="..."/>
                    }
                        <div class="card-body">
                            <h5 class="card-title">{this.props.title.slice(0,80)+"..."}</h5>
                            <div className='d-flex justify-content-between'>
                                <h6 className="card-source">{this.props.source}</h6>
                                <h5 className="card-source">{new Date(this.props.date).toDateString()}</h5>
                            </div>
                            <hr/>
                            <p class="card-text">{this.props.description}</p>
                            <a href={this.props.url} target='_blank' rel='noreferrer' class="btn btn-primary w-100 btn-sm">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}
