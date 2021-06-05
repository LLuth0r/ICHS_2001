import React from 'react'
import './Home.css';
import Logo from '../Resources/spartan_logo.png';

export default function Home() {
    return (
        <div>
            <div className="hero">
                <img className='hero-img' src={Logo} alt='spartan_logo'/>
                <h1>Class of 2001</h1>
                <h2>20 Year Reunion</h2>
            </div>
            Welcome ICHS Class of 2001!
        </div>
    )
}
