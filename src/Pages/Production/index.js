import React from 'react'
import Hero from '../../components/Home-hero'

const Production = () => {
    return (
        <div className="about">
            <Hero
                back={' url(./img/about.jpg)'}
                title={"Производство"}
            />
        </div>
    )
}

export default Production
