import React, { useState } from 'react'

export default function NewsItem (props){
        return (
            <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12'>
                <div class="card">
                    {
                        props.pic? <img src={props.pic} height="200px" class="card-img-top" alt="..."/>: 
                        <img src="/image/No_Image_Available.jpg" height="200px" class="card-img-top" alt="..."/>
                    }
                        <div class="card-body">
                            <h5 class="card-title">{props.title.slice(0,80)+"..."}</h5>
                            <div className='d-flex justify-content-between'>
                                <h6 className="card-source">{props.source}</h6>
                                <h5 className="card-source">{new Date(props.date).toDateString()}</h5>
                            </div>
                            <hr/>
                            <p class="card-text">{props.description}</p>
                            <a href={props.url} target='_blank' rel='noreferrer' class="btn btn-primary w-100 btn-sm">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
