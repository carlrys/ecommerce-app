import React from "react";

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <h5>
                    &copy; 2025
                        NewJeans Shop All rights reserved</h5>
            </div>
            <style>
                {`
                    .footer {
                        margin-top: 80px;
                        height: 5rem;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: #c1c2e3ad;
                        text-align: center;
                    h5 {
                        color: var(--clr-white);
                        margin: 0.1rem;

                        font-weight: 400;
                        text-transform: none;
                        line-height: 1.25;
                        font-size: 1rem;
                    }
                    @media (min-width: 776px) {
                        flex-direction: row;
                    }
                `}
            </style>
        </div>
    )
}

export default Footer;