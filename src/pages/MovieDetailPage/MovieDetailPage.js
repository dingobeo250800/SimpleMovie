import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '~/components/Button';
import { FaceBookIcon, PlusIcon, VoteIcon } from '~/components/Icon';
import useTv from '~/hooks/useTv';
import MovieCredits from '../MovieCredits';
import MovieSimilar from '../MovieSimilar';
import MovieVideos from '../MovieVideos';
import './MovieDetailPage.scss';

function MovieDetailPage(props) {
    const isTV = useTv();
    // https://api.themoviedb.org/3/movie/616037?api_key=c7b8625de37a7c586d5ae3d65e18b3f1
    let { id } = useParams();
    const [dataDetail, setDataDetail] = useState();
    // const [favorites, setFavorites] = useState(false);

    const getDataDetail = async () => {
        const data = await axios.get(
            `https://api.themoviedb.org/3/${isTV ? 'tv' : 'movie'}/${id}?api_key=c7b8625de37a7c586d5ae3d65e18b3f1`,
        );
        setDataDetail(data.data);
    };
    useEffect(() => {
        getDataDetail();
    }, [id]);

    if (!dataDetail) return null;
    let {
        backdrop_path,
        poster_path,
        title,
        name,
        runtime,
        episode_run_time,
        genres,
        overview,
        production_countries,
        release_date,
        vote_average,
    } = dataDetail;

    const timers = runtime ? runtime : episode_run_time;
    let hours = Math.trunc(timers / 60);
    let minutes = timers % 60;
    const end_time = (hours > 0 ? hours + 'giờ' : '') + '  ' + '  ' + (minutes > 0 ? minutes + 'phút' : '');

    const listGenres = () =>
        genres.map((item) => (
            <Button size="small_detatil" key={item.id}>
                {item.name}
            </Button>
        ));

    const handleCollection = (dataDetail) => {
        // setFavorites(!favorites);
        console.log(dataDetail);
    };
    const listCountries = () => production_countries.map((item) => <span key={item.iso_3166_1}>{item.name}</span>);
    return (
        <div className="film_detail">
            <div
                className="backdrop"
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${backdrop_path}")`,
                }}
            ></div>
            <div className="section-body">
                <div className="container">
                    <div className="deatail-content">
                        <div className="row">
                            <div className="img-detail col-4">
                                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
                                <div className="btn-watch">
                                    <Button size="large" colorWhite="colorWhite" bgColor_login="bgLogin">
                                        XEM PHIM
                                    </Button>
                                </div>
                            </div>
                            <div className="column-main col-8">
                                <h1 className="title">
                                    {title}
                                    {name}
                                </h1>
                                <p className="runtime">{end_time}</p>
                                <p className="vote">
                                    <VoteIcon />
                                    &emsp;
                                    {vote_average.toFixed(1)}
                                </p>
                                <div className="level_genres">
                                    <div className="level_genres-left">
                                        <div className="with_fb">
                                            <FaceBookIcon />
                                            <span>Chia sẻ</span>
                                        </div>

                                        <div
                                            // style={
                                            //     favorites
                                            //         ? { backgroundColor: '#3e8ed0' }
                                            //         : { backgroundColor: 'transparent' }
                                            // }
                                            className="collection"
                                            onClick={() => handleCollection(dataDetail)}
                                        >
                                            <PlusIcon />
                                            {/* <span>{favorites ? 'Đã thêm' : 'Bộ sưu tập'}</span> */}
                                            <span>Bộ sưu tập</span>
                                        </div>
                                    </div>
                                    <div className="level_genres-right">{listGenres()}</div>
                                </div>
                                <dl className="horizontal-dl">
                                    <div className="info">
                                        <strong>ĐẠO DIỄN</strong>
                                        <span>Dan Trachtenberg</span>
                                    </div>
                                    <div className="info">
                                        <strong>QUỐC GIA</strong>
                                        {listCountries()}
                                    </div>
                                    <div className="info">
                                        <strong>KHỞI CHIẾU</strong>
                                        <span>{release_date}</span>
                                    </div>
                                </dl>
                                <p className="overview">{overview}</p>
                                <MovieCredits />
                                <MovieVideos />
                            </div>
                        </div>
                    </div>
                    <MovieSimilar />
                </div>
            </div>
            <footer className="footer-detail"></footer>
        </div>
    );
}

export default MovieDetailPage;
