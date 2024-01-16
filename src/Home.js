import './Home.css';
import React from 'react';
import { ReactComponent as IllustrationDesktop } from './images/illustration-sign-up-desktop.svg'

const Home = ({successful, emailAddress}) => {

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
                <IllustrationDesktop />
            </div>
        </div>
    );
}

export default Home;