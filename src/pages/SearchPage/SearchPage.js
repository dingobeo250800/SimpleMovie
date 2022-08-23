import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Pagination from '~/components/Pagination';

import SearchItem from './SearchItem';
import './SearchPage.scss';

function SearchPage(props) {
    const itemsPerPage = 20;
    const [params] = useSearchParams();
    const value = params.get('q');
    const [dataSearch, setDataSearch] = useState([]);

    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [dataTotal_pages, setDataTotal_pages] = useState([]);

    useEffect(() => {
        const getDataSearch = async () => {
            const data = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=95f2419536f533cdaa1dadf83c606027&query=${value}&page=${page}`,
            );
            setDataSearch(data.data.results);
            setDataTotal_pages(data.data.total_pages);
        };
        getDataSearch();
    }, [page, value]);


    useEffect(() => {
        setPageCount(Math.ceil(dataTotal_pages / itemsPerPage));
    }, [dataTotal_pages, itemOffset]);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % dataSearch.length;
        setItemOffset(newOffset);
        setPage(event.selected + 1);
    };

    return (
        <div className="searchs">
            <h4>Results for "{value}"</h4>
            <div className="search_list row">
                {dataSearch.length > 0 &&
                    dataSearch.map((item) => (
                        <div className="col-2 item" key={item.id}>
                            <SearchItem data={item} />
                        </div>
                    ))}
            </div>
            <Pagination pageCount={pageCount} onPageClick={handlePageClick} />
        </div>
    );
}

export default SearchPage;
