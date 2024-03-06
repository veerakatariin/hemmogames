import React from 'react';
import '../styles/navbar.scss'
import image from '../images/hemmogames.jpg'

const NavBar = () => {
    return (
        <div>
            <ul>
                <li className='logo'>
                <img src={image} alt="image" />
                </li>
                <li className='a'>
                    <a href='/'>Etusivu</a>
                </li>
                <li>
                    <div className="dropdown">
                        <a href='/products' className='dropbtn'>Tuotteet</a>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </li>
                <li>
                    <a href='/contact'>Ota yhteyttä</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;