import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useTv from '~/hooks/useTv';
import Button from '../Button';
import MovieItem from './MovieItemOne/MovieItem';
import MovieItemTow from './MovieItemTow';
import './MovieList.scss';
function MovieList({ children, type, DesignOne }) {
    const isTV = useTv();
    const [dataList, setDataList] = useState([]);
    useEffect(() => {
        const getDataList = async () => {
            const dataResult = await axios.get(
                `https://api.themoviedb.org/3/${
                    isTV ? 'tv' : 'movie'
                }/${type}?api_key=95f2419536f533cdaa1dadf83c606027`,
            );
            setDataList(dataResult.data.results);
        };
        getDataList();
    }, []);
    return (
        <div className="movie-list">
            <div className="header_moiveList">
                <h2>{children}</h2>
                <Button to={`./${isTV ? 'tv' : 'movie'}/category/${type}`}>See details</Button>
            </div>
            <div className="movie_wrapItem row ">
                {dataList.length > 0 &&
                    dataList
                        .slice(0, 8)
                        .map((item) =>
                            !!DesignOne ? (
                                <MovieItem key={item.id} item={item} />
                            ) : (
                                <MovieItemTow key={item.id} item={item} />
                            ),
                        )}
            </div>
        </div>
    );
}

export default MovieList;
