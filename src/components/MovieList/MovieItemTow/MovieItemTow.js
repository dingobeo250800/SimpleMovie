import React from 'react';
import { Link } from 'react-router-dom';
import { StarSolidIcon } from '~/components/Icon';
import useTv from '~/hooks/useTv';
import './MovieItemTow.scss';

function MovieItemTow({ item }) {
    const isTV = useTv();
    let { id, name, original_title, backdrop_path, vote_average } = item;

    if (name) {
        name = name.split(' ').join('-').toLowerCase();
    } else if (original_title) {
        original_title = original_title.split(' ').join('-').toLowerCase();
    }
    let to = `/${isTV ? 'tv' : 'movie'}/${name ? name : original_title}/${id}`;
    return (
        <div className="col-3">
            <div className="MovieItemTow">
                <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="" className="MovieItem_img" />
                <div className="average">
                    <Link to={to} className="vote_average">
                        <h4>
                            {item.original_title} {item.name}
                        </h4>
                        <div>
                            <span>
                                <StarSolidIcon />
                            </span>
                            &ensp;
                            <span>{vote_average}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MovieItemTow;
