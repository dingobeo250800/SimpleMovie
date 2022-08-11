import React from 'react';
import { StarSolidIcon } from '~/components/Icon';
import './MovieItemTow.scss';

function MovieItemTow({ item }) {
    const { id, original_title, backdrop_path, vote_average } = item;
    return (
        <div className="col-3">
            <div className="MovieItemTow">
                <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="" className="MovieItem_img" />
                <div className="vote_average">
                    <h4>{original_title}</h4>
                    <div>
                        <span>
                            <StarSolidIcon />
                        </span>
                        &ensp;
                        <span>{vote_average}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieItemTow;
