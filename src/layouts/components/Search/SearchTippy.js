import React from 'react';
import { SearchIcon } from '~/components/Icon';
import SearchTippyLists from './SearchTippyLists';

function SearchTippy({ valueMovie, valueTv, valueInput }) {
    return (
        <div className="search_tippy">
            <div className="results_return">
                <div className="search_icon">
                    <SearchIcon />
                </div>
                <p>Results for '{valueInput}'</p>
            </div>
            {valueMovie.length > 0 && <SearchTippyLists data={valueMovie}>Movie</SearchTippyLists>}
            {valueTv.length > 0 && <SearchTippyLists data={valueTv}>Tv</SearchTippyLists>}
            
            
        </div>
    );
}

export default SearchTippy;
