import React, { useState } from 'react';
import { SearchIcon } from '~/components/Icon';
import SearchTippyLists from './SearchTippyLists';
import { useSearchParams } from 'react-router-dom';
function SearchTippy({ valueMovie, valueTv, valueInput }) {

    return (
        <div className="search_tippy">
            <div className="results_return">
                <div className="search_icon">
                    <SearchIcon />
                </div>
                <p>Results for '{valueInput}'</p>
            </div>
            {valueMovie.length > 0 && (
                <SearchTippyLists data={valueMovie} valueInput={valueInput} type="movie">
                    Movie
                </SearchTippyLists>
            )}
            {valueTv.length > 0 && (
                <SearchTippyLists data={valueTv} valueInput={valueInput} type="tv">
                    Tv
                </SearchTippyLists>
            )}
        </div>
    );
}

export default SearchTippy;
