import React from 'react';
import SearchTippyItem from './SearchTippyItem';

function SearchTippyLists({ data, children }) {
    return (
        <div className="search__results-list">
            <div className="header-search">
                <h4 className="header__search-title">{children}</h4>
                <p className="header__search-extend">See more</p>
            </div>
            {data.length > 0 && data.slice(0, 5).map((item) => <SearchTippyItem key={item.id} data={item} />)}
        </div>
    );
}

export default SearchTippyLists;
