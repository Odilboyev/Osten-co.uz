import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
const Hero = (props) => {
    return (
        <div className="hero" style={{ backgroundImage: 'linear-gradient(90deg, rgba(9, 21, 45, 0.7) 0%, rgba(9, 21, 45, 0.25) 35%, rgba(0, 212, 255, 0) 100%),' + props.back }}>
            <div className="container">
                <h1 className="title">{props.title}</h1>
                <h4 className="subtitle">{props.subtitle}</h4>
                {props.btn}
            </div>
        </div>
    )
}

export default Hero
