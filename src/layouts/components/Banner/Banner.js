import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import 'swiper/css';
import BannerItem from './BannerItem';
import './Banner.scss';
import useTv from '~/hooks/useTv';

function Banner(props) {
    const isTV = useTv();
    const [dataBanner, setDataBanner] = useState([]);
    const getDataBanner = async () => {
        const dataResult = await axios.get(
            `https://api.themoviedb.org/3/${isTV ? 'tv' : 'movie'}/top_rated?api_key=c7b8625de37a7c586d5ae3d65e18b3f1`,
        );
        let dataBanner = dataResult.data.results;
        dataBanner.sort(() => Math.random() - 0.5);
        let randumSlices = dataBanner.slice(0, 4);
        setDataBanner(randumSlices);
    };
    useEffect(() => {
        getDataBanner();
    }, []);
    return (
        <section className="banner">
            <Swiper grabCursor="true" loop={true} pagination={true} modules={[Pagination]}>
                {dataBanner.length > 0 &&
                    dataBanner.map((item) => (
                        <SwiperSlide key={item.id}>
                            <BannerItem item={item}></BannerItem>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    );
}

export default Banner;
