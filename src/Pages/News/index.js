import React from 'react'
import Hero from '../../components/Home-hero'

const News = () => {
    return (
        <div className="about">
            <Hero
                back={' url(./img/about.jpg)'}
                title={"Новости"}
            />
        </div>
    )
}

export default News
