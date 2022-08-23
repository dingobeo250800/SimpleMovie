import React, { useEffect, useRef, useState } from 'react';
import { ClearSearchIcon, LoadingIcon, SearchIcon } from '~/components/Icon';
import HeadlessTippy from '@tippyjs/react/headless';
import './Search.scss';
import SearchTippy from './SearchTippy';
import axios from 'axios';
import useDebounce from '~/hooks/useDebounce';

function Search(props) {
    const [searchValue, setSearchValue] = useState('');
    const [showResultMovie, setShowResultMovie] = useState([]);
    const [showResultTv, setShowResultTv] = useState([]);
    const [searchResul, setSearchResul] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef();

    const debounceSearchValues = useDebounce(searchValue, 500);
    // https://api.themoviedb.org/3/search/movie?api_key=95f2419536f533cdaa1dadf83c606027&query=batman
    // https://api.themoviedb.org/3/search/tv?api_key=95f2419536f533cdaa1dadf83c606027&query=batman
    useEffect(() => {
        if (!debounceSearchValues.trim()) {
            setShowResultMovie([]);
            setShowResultTv([]);
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        let endpoints = [
            `https://api.themoviedb.org/3/search/movie?api_key=95f2419536f533cdaa1dadf83c606027&query=${debounceSearchValues}`,
            `https://api.themoviedb.org/3/search/tv?api_key=95f2419536f533cdaa1dadf83c606027&query=${debounceSearchValues}`,
        ];
        Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(([{ data: movie }, { data: tv }]) => {
            setShowResultMovie(movie.results);
            setShowResultTv(tv.results);
        });
        setIsLoading(false);
    }, [debounceSearchValues]);
    const handleSearchValue = (e) => {
        setSearchValue(e.target.value);
        setIsLoading(true);
    };

    const handleClearSearchValue = () => {
        setSearchValue('');
        setShowResultMovie([]);
        setShowResultTv([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setSearchResul(false);
    };

    const handleSearchFocus = () => {
        setSearchResul(true);
    };
    return (
        <div>
            <HeadlessTippy
                interactive
                visible={searchResul && (showResultMovie.length > 0 || showResultTv.length > 0)}
                // placement="bottom"
                render={(attrs) => (
                    <div className="search_resul" tabIndex="-1" {...attrs}>
                        <SearchTippy
                            valueInput={searchValue}
                            valueMovie={showResultMovie}
                            valueTv={showResultTv}
                        ></SearchTippy>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className="search">
                    <div className="search_icon">
                        <SearchIcon />
                    </div>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search movies..."
                        value={searchValue}
                        onChange={handleSearchValue}
                        onFocus={handleSearchFocus}
                    />
                    {!!searchValue && !isLoading && (
                        <div className="clearSearch_icon" onClick={handleClearSearchValue}>
                            <ClearSearchIcon />
                        </div>
                    )}
                    {isLoading && (
                        <div className="loading_icon" onClick={handleClearSearchValue}>
                            <LoadingIcon />
                        </div>
                    )}
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
