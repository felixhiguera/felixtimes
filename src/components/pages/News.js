import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import Spinner from '../Spinner'
import New from './New'


const News = ({ category }) => {
    const { setCategory, news } = useContext(UserContext)
    setCategory(category)
    const newsRest = news.slice(1)
    console.log(news)
    const component = news == 0 ? <Spinner /> :

        <div className="main-new animate__animated animate__fadeIn">
            <a href={news[0].url} target="_blank" >
                <img src={news[0].image} alt="" />
                <h1>{news[0].title}</h1>
                <p>{news[0].description} </p>
            </a>

        </div>

    return (
        <div className="contain" >
            <div className="center-contain">

                {component}



            </div>

            <div className="news ">
                {newsRest.map(n => (
                    <New key={n.url} n={n} />
                ))}


            </div>

        </div>
    )
}

export default News
