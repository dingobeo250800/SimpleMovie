import React from 'react';
import Button from '~/components/Button';
import config from '~/config';
import useTv from '~/hooks/useTv';
import './Banner.scss';

function BannerItem({ item }) {
    const isTV = useTv();
    let { id, original_title, overview, poster_path } = item;
    if (original_title) {
        original_title = original_title.split(' ').join('-').toLowerCase();
    }
    let to = `/${isTV ? 'tv' : 'movie'}/${original_title}/${id}`;
    var countOverView = 300;
    return (
        <div
            className="banner_item"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original${poster_path}")`,
            }}
        >
            <div className="banner_overlay"></div>
            <div className="banner_detail">
                <h2 className="banner_title">{original_title}</h2>
                <p className="overview">
                    {overview.slice(0, countOverView) + (overview.length > countOverView ? '  ...' : '')}
                </p>
                <Button to={to} className="watch_now">
                    Watch Now
                </Button>
            </div>
        </div>
    );
}

export default BannerItem;
