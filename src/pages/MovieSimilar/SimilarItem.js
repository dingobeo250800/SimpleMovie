import React from 'react';
import { Link } from 'react-router-dom';
import useTv from '~/hooks/useTv';

function SimilarItem({ data }) {
    const isTV = useTv();
    const { poster_path, title, name, id } = data;
    const titleParamUrl = title.split(' ').join('-');

    const to = `/${isTV ? 'tv' : 'movie'}/${titleParamUrl.toLowerCase()}/${id}`;
    return (
        <Link to={to} className="item">
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
            <p>
                {title}
                {name}
            </p>
        </Link>
    );
}

export default SimilarItem;
