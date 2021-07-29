import React from 'react'
import Hero from '../../components/Home-hero'

const Constructor = () => {
    return (
        <div className="about">
            <Hero
                back={' url(./img/about.jpg)'}
                title={"КОНСТРУКТОР"}
            />
        </div>
    )
}

export default Constructor
