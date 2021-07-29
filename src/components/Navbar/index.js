import React, { useState } from 'react'
import './Navbar.css'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ClNavbar = () => {
    const [collapse, setCollapse] = useState(false)

    return (
        <div>
            <FaBars fontSize="20px" onClick={() => setCollapse(!collapse)} />

            <ul className="navbar-links" style={{ right: collapse ? '0' : '-100%' }}>
                <li><Link to='/'>ГЛАВНАЯ</Link></li>
                <li><Link to='/about'>О НАС</Link></li>
                <li><Link to='/production'>Производство</Link></li>
                <li><Link to='/services'>Услуги</Link></li>
                <li><Link to='/product'>Производство</Link></li>
                <li><Link to='/constructor'>КОНСТРУКТОР</Link></li>
                <li><Link to='/news'>Новости</Link></li>
                <li><Link to='/contacts'>Контакты</Link></li>
            </ul>
        </div>
    )
}

export default ClNavbar
