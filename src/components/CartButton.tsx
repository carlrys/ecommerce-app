import React from 'react'
import { Link } from 'react-router-dom'

const CartButton = () => {

    return (
        <div className="custom-button-wrapper">
            <Link to='/home' className='custom-button'>
                    <i className="bi bi-cart" style={{ fontSize: '2rem' }}></i>
            </Link>
            <style>
                {`
                    .custom-button {
                        color: grey;
                        padding: 8px 16px;
                        border-radius: 4px;
                        cursor: pointer;
                        text-align: center;
                        transition: background-color 0.2s;
                        }

                    .custom-button:hover {
                        background-color: #0056b3; /* Darker blue on hover */
                        }
                    .custom-button-wrapper {
                        padding: 0px 10px 10px 0px
                    }
                `}
            </style>
        </div>
    )
}

export default CartButton;