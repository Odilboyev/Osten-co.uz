import React from 'react'
import Hero from '../../components/Home-hero'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <Hero
                back={' url(./img/home.jpg)'}
                title={"«Osten» — уникальный производитель, лифтов и эскалаторов в Средней Азии"}
                subtitle={'Компания «Osten» была основана в 2019 году!'}
                btn={<Link to='/about'><button className='btn'> ПОДРОБНЕЕ</button></Link>} />
        </div >
    )
}

export default Home
