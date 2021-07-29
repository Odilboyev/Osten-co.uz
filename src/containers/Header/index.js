import React from 'react'
import ClNavbar from '../../components/Navbar'
import './Header.css'

const Header = () => {
    return (
        <div className="bg-white shadow header d-flex align-items-center">
            <div className="container d-flex justify-content-between align-items-center">
                <div className="logo">
                    <img src="https://osten-co.uz/images/osten.svg" className="img-fluid" alt="Osten" />
                </div>
                <ClNavbar />
            </div>
        </div>
    )
}

export default Header
