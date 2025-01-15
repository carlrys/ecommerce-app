import React from 'react';
import { Link } from 'react-router-dom'
import CartButton from './CartButton';

const NavBar: React.FC = () => {

    const navLinks = [
        { id: 1, link: '/', text: 'home' },
        { id: 1, link: '/products', text: 'products' },
    ];

    return (
        <div>
        {/* Navbar */}
            <div className ="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/NewJeans_-_New_Jeans_EP_poster.png" alt="Logo"/>
                    </div>
                    <div>
                        <ul className="nav-links">
                            { navLinks.map(({ id, text, link,}) => {
                                return (
                                    <li key={id}>
                                        <Link to={link}>{text}</Link>
                                    </li>
                                )
                        })}
                        </ul>
                    </div>
                </div>
                <CartButton />
            </div>
            <style>
                {`
                    .navbar {
                        height: 7rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background-color: #ffc4c4b3;
                    }
                    .nav-center {
                        width: 70vw;
                        margin: 0 auto;
                        max-width: var(--max-width);
                    }
                    .nav-header {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        img {
                            width: 155px;
                            /* original margin-left: -15px */
                        }
                    }
                    .nav-toggle {
                        background: transparent;
                        border: transparent;
                        color: var(--clr-primary-5);
                        cursor: pointer;
                        svg {
                        font-size: 2rem;
                        }
                    }
                    .nav-links {
                        margin-top: 10px;
                        display: none;
                        margin-right: 70px;
                    }
                    @media (min-width: 992px) {
                        img{
                            margin-left: 15px;

                        }
                        .nav-toggle {
                            display: none;
                        }
                        .nav-center {
                            display: grid;
                            grid-template-columns: auto 1fr auto;
                            align-items: center;
                        }
                        .nav-links {
                            list-style-type: none;
                            display: flex;
                            justify-content: center;
                        li {
                            margin: 0 0.5rem;
                        }
                        a {
                            text-decoration: none;
                            color: grey;
                            font-size: 20px;
                            text-transform: capitalize;
                            letter-spacing: var(--spacing);
                            padding: 0.5rem;
                            &:hover {
                            border-bottom: 2px solid var(--clr-primary-7);
                            }
                        }
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default NavBar;