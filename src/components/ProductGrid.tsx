import React from 'react';

const ProductGrid: React.FC = () => {
    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Our Products</h2>
            <div className="row">
                {[1, 2, 3, 4, 5, 6].map((product) => (
                <div className="col-md-4 mb-4" key={product}>
                    <div className="card">
                    <img
                        src={`https://via.placeholder.com/300?text=Product+${product}`}
                        className="card-img-top"
                        alt={`Product ${product}`}
                    />
                    <div className="card-body text-center">
                        <h5 className="card-title">Product {product}</h5>
                        <p className="card-text">This is a description of product {product}.</p>
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            <style>
                {`
                .card {
                    border: 1px solid #ddd;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    transition: transform 0.2s ease;
                }

                .card:hover {
                    transform: translateY(-5px);
                }
                `}
            </style>
        </div>
    );
};

export default ProductGrid;