import React from 'react'
import Hero from '../../components/Home-hero'

const About = () => {
    return (
        <div className="about">
            <Hero
                back={' url(./img/about.jpg)'}
                title={"MODERN LIFT SYSTEMS"}
                subtitle={'Крупная лифтостроительная компания в Узбекистане!'}
            />
        </div>
    )
}

export default About
