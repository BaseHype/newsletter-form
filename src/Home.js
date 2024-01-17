import './Home.css';
import React, { useState, useEffect } from 'react';
import { ReactComponent as IllustrationDesktop } from './images/illustration-sign-up-desktop.svg';
import { ReactComponent as IllustrationMobile } from './images/illustration-sign-up-mobile.svg';

const Home = ({successful, emailAddress}) => {
    const [width, setWidth] = useState(window.outerWidth);
    const breakpoint = 375;

    useEffect(() => {
        const handleResize = () => setWidth(window.outerWidth);
        console.log(width);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    const handleSubmit = e => {
        successful(true);
    }

    return (
        <div className="home">
            <div className="home-content">
                <h1>Stay Updated!</h1>
                <p>Join 60,000 product managers receiving monthly updates</p>
                <ul>
                    <li>Product discovery and building what matters</li>
                    <li>Measuring to ensure updates are a success</li>
                    <li>And much more!</li>
                </ul>

                <form onSubmit={handleSubmit}>
                    <label>Email address</label>
                    <input 
                        type="email" 
                        placeholder="email@company.com"
                        onChange={(e) => emailAddress(e.target.value)}
                        required />
                    <button>Subscribe to monthly newsletter</button>
                </form>
            </div>
            <div className="image-container">
                {width > breakpoint && <IllustrationDesktop className="desktop" />}
                {width <= breakpoint && <IllustrationMobile className="mobile" />}
            </div>
        </div>
    );
}

export default Home;