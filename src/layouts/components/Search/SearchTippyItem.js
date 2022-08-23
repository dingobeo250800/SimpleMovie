import React from 'react';
import Button from '~/components/Button';
import useTv from '~/hooks/useTv';
import Image from '~/Image';

function SearchTippyItem({ data, type }) {
    let { backdrop_path, title, name, id } = data;
    if (name) {
        name = name.split(' ').join('-').toLowerCase();
    } else if (title) {
        title = title.split(' ').join('-').toLowerCase();
    }
    let to = `/${type === 'tv' ? 'tv' : 'movie'}/${name ? name : title}/${id}`;
    return (
        <Button to={to}>
            <div className="search__results-item">
                <div className="search__results-image">
                    <Image src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={data?.title || data?.name} />
                </div>
                <div className="search__results-name">{data?.title || data?.name}</div>
            </div>
        </Button>
    );
}

export default SearchTippyItem;
