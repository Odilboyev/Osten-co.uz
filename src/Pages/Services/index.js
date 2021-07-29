import React from 'react'
import Hero from '../../components/Home-hero'
import { Link } from 'react-router-dom'
const Services = () => {
    return (
        <div className="about">
            <Hero
                back={'url(./img/about.jpg)'}
                title={"Услуги"} />
        </div >
    )
}

export default Services
