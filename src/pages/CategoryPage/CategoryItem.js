import React from 'react';
import { Link } from 'react-router-dom';
import useTv from '~/hooks/useTv';
import './CategoryPage.scss';

function CategoryItem({ data }) {
    const isTV = useTv();
    const { id, name, title, poster_path } = data;
    let urlName = name ? name : title;
    let nametag = urlName.split(' ').join('');
    return (
        <div className="cate">
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
            <Link to={`/${isTV ? 'tv' : 'movie'}/${nametag.toLowerCase()}/${id}`} className="name">
                {name}
                {title}
            </Link>
        </div>
    );
}

export default CategoryItem;
