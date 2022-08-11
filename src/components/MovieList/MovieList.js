import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from '../Button';
import MovieItem from './MovieItem';
import MovieItemTow from './MovieItemTow';
import './MovieList.scss';
function MovieList({ children, type, uiHozontal, DesignOne }) {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        const getDataList = async () => {
            const dataResult = await axios.get(
                `https://api.themoviedb.org/3/movie/${type}?api_key=95f2419536f533cdaa1dadf83c606027`,
            );
            // console.log(dataResult);
            setDataList(dataResult.data.results.slice(0, 8));
        };
        getDataList();
    }, [type]);
    return (
        <div className="movie-list">
            <div className="header_moiveList">
                <h2>{children}</h2>
                <Button>See details</Button>
            </div>
            <div className="movie_wrapItem row ">
                {dataList.length > 0 &&
                    dataList.map((item) =>
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
