import React from 'react'
import Hero from '../../components/Home-hero'

const Contacts = () => {
    return (
        <div className="about">
            <Hero
                back={' url(./img/about.jpg)'}
                title={"Контакты"}
            />
        </div>
    )
}

export default Contacts
