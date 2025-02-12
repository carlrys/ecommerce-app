import React from "react";
import { Link } from "react-router-dom";

const List = () => {
    const products= [//remove after backend api is setup
        {
            id: 1,
            image: 'https://images.stockx.com/images/NewJeans-x-Murakami-T-shirt-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1725039753',
            name: 'Cute Shirt',
            description: 'This is the first slide of the carousel.',
            price: 0
        },
        {
            id: 2,
            image: 'https://images.stockx.com/images/NewJeans-x-Murakami-T-shirt-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1725039753',
            name: 'Cute Shirt',
            description: 'This is the first slide of the carousel.',
            price: 0
        },
        {
            id: 3,
            image: 'https://images.stockx.com/images/NewJeans-x-Murakami-T-shirt-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1725039753',
            name: 'Cute Shirt',
            description: 'This is the first slide of the carousel.',
            price: 0
        },
        {
            id: 4,
            image: 'https://images.stockx.com/images/NewJeans-x-Murakami-T-shirt-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1725039753',
            name: 'Cute Shirt',
            description: 'This is the first slide of the carousel.',
            price: 0
        },
        {
            id: 5,
            image: 'https://images.stockx.com/images/NewJeans-x-Murakami-T-shirt-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1725039753',
            name: 'Cute Shirt',
            description: 'This is the first slide of the carousel.',
            price: 0
        },
        {
            id: 6,
            image: 'https://images.stockx.com/images/NewJeans-x-Murakami-T-shirt-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1725039753',
            name: 'Cute Shirt',
            description: 'This is the first slide of the carousel.',
            price: 0
        },

    ];

    return (
        <div>
            <div className="section">
                { products.map((product) =>
                    <article key={product.id} className="arti">
                        <Link to='/'>
                            <img src={product.image} alt={product.name}/>
                        </Link>
                        <div>
                            <h4> { product.name } </h4>
                            <h5> { product.price } </h5>
                            <p> { product.description } </p>
                            <Link to='/' className="btn">
                                Details
                            </Link>
                        </div>
                    </article>
                )}
            </div>

            <style>
                {`
                    .section {
                        display: grid;
                        row-gap: 3rem;
                    }

                    img {
                        width: 100%;
                        display: block;
                        width: 300px;
                        height: 200px;
                        object-fit: cover;
                        border-radius: var(--radius);
                        margin-bottom: 1rem;
                    }

                    .arti {
                        display: flex;
                        align-items: center;
                        margin-bottom: 40px;
                        margin-left: 5rem;
                    }

                    .btn {
                        font-size: 0.5rem;
                        padding: 0.25rem 0.5rem
                    }

                    @media (min-width: 992px) {
                        article {
                            display:grid;
                            grid-template-columns: auto 1fr;
                            column-gap: 2rem;
                            align-items: center;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default List;
