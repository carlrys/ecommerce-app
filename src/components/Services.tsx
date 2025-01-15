import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
    const services= [
        {
            id: 1,
            icon: 'bi bi-magic',
            title: 'Light Sticks',
        },
        {
            id: 2,
            icon: 'bi bi-clipboard-fill',
            title: 'Shirts',
        },
        {
            id: 3,
            icon: 'bi bi-music-note-beamed',
            title: 'Third Slide',
            description: 'This is the third slide of the carousel.',
        },
    ];

    return (
        <div>
            <div className="section-center">
                <article className='header'>
                    <h3>
                        high quality baby product
                    </h3>
                    <p>
                        We offer well priced, high quality branded baby products imported from
                        Japan, Europe and USA. All items are in limited quantity.
                    </p>
                    <p>We have the following types of products:</p>
                </article>
                <div className='services-center'>
                    {services.map(({ id, icon, title }) => {
                        return (
                        <div key={id} className='service'>
                            <span>
                                <i className={icon} style={{ fontSize: '2rem' }}></i>
                            </span>
                            <h4>{title}</h4>
                            <Link to='/products'>
                            <button
                                className='btn'
                                type='button'
                                name='home-page-category'
                                value={title}
                                onClick={e => {
                                }}
                            >
                                click here for {title}
                            </button>
                            </Link>
                        </div>
                        )
                    })}
                </div>
            </div>
            <style>
                {`
                    .section-center {
                        width: 70vw;
                        margin: 0 300px;
                    }
                    h3,
                    h4 {
                        color: var(--clr-primary-1);
                    }

                    .header h3 {
                        margin-bottom: 2rem;
                    }
                    p {
                        margin-bottom: 0;
                        line-height: 1.8;
                        color: grey;
                        font-size: 1rem;
                    }
                    .services-center {
                        display: grid;
                        gap: 2.5rem;
                    }
                    .service {
                        background: #c9fbd99c;
                        text-align: center;
                        padding: 2.5rem 2rem;
                        border-radius: var(--radius);
                        p {
                        color: var(--clr-primary-2);
                        }
                    }
                    span {
                        width: 4rem;
                        height: 4rem;
                        display: grid;
                        margin: 0 auto;
                        place-items: center;
                        margin-bottom: 1rem;
                        border-radius: 50%;
                        background: var(--clr-primary-10);
                        color: var(--clr-primary-1);
                        svg {
                        font-size: 2rem;
                        }
                    }

                    .btn {
                        margin: 0 auto;
                        text-align: center;
                        background-color: #afff8740;
                    }

                    @media (min-width: 992px) {
                        .header {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            margin-top: 6rem;
                        }
                    }
                    @media (min-width: 576px) {
                        .services-center {
                        grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
                        }
                    }
                    @media (min-width: 1280px) {
                        padding: 0;
                        .section-center {
                            transform: translateY(5rem);
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default Categories;