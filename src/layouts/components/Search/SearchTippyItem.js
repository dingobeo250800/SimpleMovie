import React from 'react';
import Image from '~/Image';

function SearchTippyItem({ data }) {
    const { backdrop_path, title, name } = data;
    return (
        <>
            <div className="search__results-item">
                <div className="search__results-image">
                    <Image src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={data?.title || data?.name} />
                </div>
                <div className="search__results-name">{data?.title || data?.name}</div>
            </div>
        </>
    );
}

export default SearchTippyItem;
