import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import './MovieSimilar.scss';
import SimilarItem from './SimilarItem';

function MovieSimilar(props) {
    let { id } = useParams();

    const [dataSimilar, setDataSimilar] = useState([]);

    const getDataSimilar = async () => {
        const data = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/similar?api_key=c7b8625de37a7c586d5ae3d65e18b3f1`,
        );
        setDataSimilar(data.data.results);
    };
    useEffect(() => {
        getDataSimilar();
    }, [id]);
    if (!dataSimilar) return null;
    return (
        <section className="similars">
            <h4>PHIM TƯƠNG TỰ</h4>
            <div className="similar_list">
                <Swiper slidesPerView={6} spaceBetween={20}>
                    {dataSimilar.length > 0 &&
                        dataSimilar.map((item, index) => (
                            <SwiperSlide key={index}>
                                <SimilarItem data={item} />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </section>
    );
}

export default MovieSimilar;
