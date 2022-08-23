import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';

import './MovieVideos.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

function MovieVideos(props) {
    let { id } = useParams();
    const [datavideo, setDatavideo] = useState([]);

    const getDataVideos = async () => {
        const data = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=c7b8625de37a7c586d5ae3d65e18b3f1`,
        );
        setDatavideo(data.data.results);
    };
    useEffect(() => {
        getDataVideos();
    }, [id]);
    if (!datavideo) return null;
    return (
        <section className="video">
            <h4>Trailer</h4>
            <div className="main-wrap">
                <Swiper slidesPerView={1} centeredSlides={true} scrollbar={true}>
                    {datavideo.length > 0 &&
                        datavideo.slice(0, 3).map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="slide-video">
                                    <iframe
                                        width="100%"
                                        height="400"
                                        src={`https://www.youtube.com/embed/${item.key}`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full object-fill"
                                    ></iframe>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </section>
    );
}

export default MovieVideos;
