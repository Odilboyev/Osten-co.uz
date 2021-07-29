import React from 'react'
import Hero from '../../components/Home-hero'

const Product = () => {
    return (
        <div className="about">
            <Hero
                back={' url(./img/about.jpg)'}
                title={"ПРОДУКЦИЯ"}
            />
        </div>
    )
}

export default Product
