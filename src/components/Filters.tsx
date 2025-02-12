import React from "react";

const Filters = () => {

    return (
        <div>

            <div className="section">
                <div className="show-filters content">
                    <div className="form-control"> {/* Searchbar*/}
                        <input
                            type="text"
                            placeholder="Search"
                            className="search-input"
                        />
                    </div>{/* Searchbar*/}
                    <div className="form-control">{/* Category*/}
                        <h5>Category</h5>
                        <div>
                            <button
                                name="category"
                                type="button"
                            >
                                All
                            </button>
                            <button
                                name="category"
                                type="button"
                            >
                                All All
                            </button>
                            <button
                                name="category"
                                type="button"
                            >
                                All All All
                            </button>
                        </div>
                    </div>{/* Category*/}
                    <div
                        className="form-control"
                    >{/* Gender Filters*/}
                        <h5>Select gender</h5>
                        <select
                            className="drpdwn"
                        >
                            <option>
                                All
                            </option>
                            <option>
                                Male
                            </option>
                            <option>
                                Female
                            </option>
                        </select>
                    </div>{/* Gender Filters*/}
                    <div className="form-control"> {/*Price filters */}
                        <h5>Price</h5>
                        <p className="price">$100</p>
                        <input
                            type="range"
                            name="price"
                        />
                    </div>
                    <div className="form-control checkbox"> {/*Size filters */}
                        <h5>Size</h5>
                        <label>
                            <input
                                type="checkbox"
                                value="S"
                            />
                            {"  "}
                            S
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="M"
                            />
                            {"  "}
                            M
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="L"
                            />
                            {"  "}
                            L
                        </label>
                    </div>
                </div>
            </div>
            <style>
                {`
                    .form-control {
                        margin-bottom: 1.25rem;
                        h5 {
                            margin-bottom: 0.5rem;
                        }
                    }
                    .content {
                        display: none;
                    }
                    .show-filters {
                        display: block;
                    }
                    .search-input {
                        padding: 0.5rem;
                        background: #f1f5f8;
                        border-radius: 0.25rem;
                        border-color: transparent;
                        letter-spacing: 0.1rem;
                        width: 12rem;
                        height: 2rem;
                    }
                    .search-input::placeholder {
                        text-transform: capitalize;
                    }
                    button {
                        display: block;
                        margin: 0.25em 0;
                        padding: 0.25rem 0;
                        text-transform: capitalize;
                        background: transparent;
                        border: none;
                        border-bottom: 1px solid transparent;
                        letter-spacing: var(--spacing);
                        color: var(--clr-grey-5);
                        cursor: pointer;
                    }
                    .active {
                        red;
                    }
                    .drpdwn {
                        background: grey;
                        border-radius: 0.25rem;
                        border-color: transparent;
                        padding: 0.25rem;
                        text-transform: capitalize;
                        width: 12rem;
                    }
                    .price {
                        margin-bottom: 0.25rem;
                    }
                    .checkbox {
                        display: grid;
                        grid-template-columns: 1fr;
                        align-items: center;
                        column-gap: 0.5rem;
                        font-size: 1rem;
                    }
                    @media (min-width: 768px) {
                        .content {
                            display: block;
                            position: sticky;
                            top: 1rem;
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default Filters;