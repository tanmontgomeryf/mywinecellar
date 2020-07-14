import React from 'react';
import './Pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    let result;

    if (pageNumbers.length > 1)
        result = (
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <button
                            onClick={() => paginate(number)}
                            className="page-link"
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        );

    return <>{result}</>;
};

export default Pagination;
