import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../Constants/constants'
import './Banner.css'
import axios from '../../axios'

function Banner() {
    const [movie, setMovie] = useState();
    useEffect(()=>{
        axios.get(`trending/all/day?api_key=${API_KEY}`).then((response)=>{
            setMovie (response.data.results[Math.floor((Math.random() * 20))]);
        })
    },[])
    return (
        <div 
        style={{backgroundImage:`url(${ movie ? imageUrl+movie.backdrop_path : ""})`}}
         className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : ""}</h1>
                <p className='description'>{movie ? movie.overview : ""}</p>
                <div className='banner_buttons'>
                    <button className='play_button'>Play</button>
                    <button className='moreinfo_button'>More Info</button>
                </div>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
