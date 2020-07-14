import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import WineItems from '../WineList/WineItems';
import Pagination from '../Layout/Pagination';
import { isLanding } from '../../redux';
import Loading from '../Layout/Loading';
import './WineList.css';

const WineList = ({
    wine: { isLoading, wineData },
    myWineCellar,
    isLanding,
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [search, setSearch] = useState('');
    const [filteredWineData, setFilteredWineData] = useState([]);

    useEffect(() => {
        if (!myWineCellar) {
            setFilteredWineData(
                wineData &&
                    wineData.results.filter((wineData) =>
                        wineData.wine
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    )
            );
            isLanding(true);
        }
        if (myWineCellar) {
            let data = localStorage.getItem('cellarData');
            if (data !== null)
                setFilteredWineData(
                    JSON.parse(data).filter((wineData) =>
                        wineData.wine
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    )
                );
            isLanding(false);
        }
    }, [search, wineData, myWineCellar, isLanding]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPosts;

    const handlePaginate = (pageNumber) => setCurrentPage(pageNumber);

    let result;

    if (!myWineCellar) {
        currentPosts =
            wineData &&
            filteredWineData &&
            filteredWineData.slice(indexOfFirstPost, indexOfLastPost);
        result = (
            <section className="winelist">
                {isLoading && wineData === null ? (
                    <Loading />
                ) : (
                    <>
                        <div className="winelist-main">
                            <div className="container">
                                <input
                                    type="text"
                                    value={search}
                                    placeholder="Search from top 100 wine"
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                                {wineData &&
                                filteredWineData &&
                                filteredWineData.length === 0 ? (
                                    <h3>No results found</h3>
                                ) : (
                                    ''
                                )}
                                <div className="winelist-div">
                                    {wineData &&
                                        filteredWineData &&
                                        currentPosts.map((wineData) => (
                                            <WineItems
                                                key={`${wineData.wine_id}${wineData.vintage}`}
                                                wineData={wineData}
                                            />
                                        ))}
                                </div>
                            </div>
                        </div>
                        <Pagination
                            postsPerPage={postsPerPage}
                            totalPosts={
                                wineData &&
                                filteredWineData &&
                                filteredWineData.length
                            }
                            paginate={handlePaginate}
                        />
                    </>
                )}
            </section>
        );
    } else {
        currentPosts = filteredWineData.slice(
            indexOfFirstPost,
            indexOfLastPost
        );
        result = (
            <>
                <section className="winelist">
                    <Link to="/mywinecellar/add">
                        <button>+</button>
                    </Link>
                    <div className="winelist-main">
                        <div className="container">
                            <input
                                type="text"
                                value={search}
                                placeholder="Search wine from cellar"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <div className="winelist-div">
                                {currentPosts.map((wineData) => (
                                    <WineItems
                                        key={`${wineData.wine_id}${wineData.vintage}`}
                                        wineData={wineData}
                                        myWineCellar
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={filteredWineData.length}
                        paginate={handlePaginate}
                    />
                </section>
            </>
        );
    }

    return <>{result}</>;
};

const mapStateToProps = (state) => ({
    wine: state.wine,
});

export default connect(mapStateToProps, { isLanding })(WineList);
