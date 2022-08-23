import React from 'react';
import { Link } from 'react-router-dom';
import useTv from '~/hooks/useTv';
import Button from '../../Button';

function MovieItem({ item }) {
    const isTV = useTv();
    let { name, title, vote_average, release_date, poster_path, id,first_air_date } = item;
    if (name) {
        name = name.split(' ').join('-').toLowerCase();
    } else if (title) {
        title = title.split(' ').join('-').toLowerCase();
    }
    let to = `/${isTV ? 'tv' : 'movie'}/${name ? name : title}/${id}`;
    return (
        <div className="col-3">
            <div className="MovieItem">
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" className="MovieItem_img" />
                <div className="MovieItem_deteail">
                    <Link to={to} className="deteail_name">
                        {item.title} {item.name}
                    </Link>
                    <div className="view_start">
                        <span>{(new Date(release_date).getFullYear() ? new Date(release_date).getFullYear() : '')}{first_air_date}</span>
                        <span>{vote_average}</span>
                    </div>
                    <div className="btn-watch">
                        <Button to={to} bgColor_login="bgLogin" size="large" colorWhite="colorWhite">
                            Watch now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieItem;
