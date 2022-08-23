import React from 'react';
import { Link } from 'react-router-dom';
import SearchTippyItem from './SearchTippyItem';

function SearchTippyLists({ data, children, type, valueInput }) {
    let linkto = '';
    if (type === 'tv') {
        linkto = `/tv/search?q=${valueInput}`;
    } else {
        linkto = `/movie/search?q=${valueInput}`;
    }
    return (
        <div className="search__results-list">
            <div className="header-search">
                <h4 className="header__search-title">{children}</h4>
                <Link to={linkto} className="header__search-extend">
                    See more
                </Link>
            </div>
            {data.length > 0 &&
                data.slice(0, 5).map((item) => <SearchTippyItem key={item.id} data={item} type={type} />)}
        </div>
    );
}

export default SearchTippyLists;
