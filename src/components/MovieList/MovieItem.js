import React from 'react';
import Button from '../Button';

function MovieItem({ item }) {
    const { title, vote_average, release_date, poster_path, id } = item;

    return (
        <div className="col-3">
            <div className="MovieItem">
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" className="MovieItem_img" />
                <div className="MovieItem_deteail">
                    <h3 className="deteail_name">{title}</h3>
                    <div className="view_start">
                        <span>{new Date(release_date).getFullYear()}</span>
                        <span>{vote_average}</span>
                    </div>
                    <Button bgColor_login="bgLogin" size="large" colorWhite="colorWhite">
                        Watch now
                    </Button>
                    {/* onClick={() => navigate(`/movie/${id}`)} */}
                </div>
            </div>
        </div>
    );
}

export default MovieItem;
