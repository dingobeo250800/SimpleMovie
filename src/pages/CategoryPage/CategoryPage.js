import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Pagination from '~/components/Pagination';
import useTv from '~/hooks/useTv';
import CategoryItem from './CategoryItem';
import './CategoryPage.scss';

function CategoryPage() {
    const itemsPerPage = 20;
    const isTV = useTv();
    let location = useLocation();
    let type = location.pathname.split('/');
    let lastType = type[type.length - 1];

    const [dataCategory, setDataCategory] = useState([]);

    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [dataTotal_pages, setDataTotal_pages] = useState([]);

    const getDataCategory = async () => {
        const data = await axios.get(
            `https://api.themoviedb.org/3/${
                isTV ? 'tv' : 'movie'
            }/${lastType}?api_key=95f2419536f533cdaa1dadf83c606027&page=${page}`,
        );
        setDataCategory(data.data.results);
        setDataTotal_pages(data.data.total_pages);
    };
    useEffect(() => {
        getDataCategory();
    }, [page]);

    useEffect(() => {
        setPageCount(Math.ceil(dataTotal_pages / itemsPerPage));
    }, [dataTotal_pages, itemOffset]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % dataCategory.length;
        setItemOffset(newOffset);
        setPage(event.selected + 1);
    };

    return (
        <div className="category-page">
            <div className="header_cate">
                <h1>popular</h1>
            </div>
            <div className="categoris row">
                {dataCategory.map((item) => (
                    <div className="category col-2" key={item.id}>
                        <CategoryItem data={item} />
                    </div>
                ))}
            </div>
            <Pagination pageCount={pageCount} onPageClick={handlePageClick} />
        </div>
    );
}

export default CategoryPage;
