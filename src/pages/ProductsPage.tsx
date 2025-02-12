import React from "react";
import { Link } from "react-router-dom";
import List from "../components/List";
import Filters from "../components/Filters";

const ProductsPage = () => {
  return (
    <main>
      <div className="hero">
        <div className="section-center">
          <h3>
            <Link to="/">
              Home
            </Link>
            <Link to="/">
              / Products
            </Link>/ ProductName
          </h3>
        </div>
      </div> {/*hero*/}
      <div className="page">
        <div className="section-center products">
          <div>
            <Filters/>
          </div>
          <div>
              <List/>
          </div>
        </div>
      </div>
      <style>
        {`
          .hero {
            background: #e1bca4a1;
            width: 100%;
            min-height: 20vh;
            display: flex;
            align-items: center;

            color:
            a {
              color: ;
              padding: 0.5rem;
              transition: var(--transition);
            }
            a:hover {
              color: ;
            }
          }

          .products {
            display: grid;
            gap: 3rem 1.5rem;
            margin: 4rem auto;
            margin-left: 20rem;
          }
          @media (min-width: 768px) {
            .products {
              grid-template-columns: 200px 1fr;
            }
          }
        `}
      </style>
    </main>
  )
}

export default ProductsPage;