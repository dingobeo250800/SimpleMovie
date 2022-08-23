import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import './MovieCredits.scss';

function MovieCredits(props) {
    let { id } = useParams();
    const [dataCredits, setDataCredits] = useState([]);

    const getDataCredits = async () => {
        const data = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c7b8625de37a7c586d5ae3d65e18b3f1`,
        );
        setDataCredits(data.data.cast);
    };
    useEffect(() => {
        getDataCredits();
    }, [id]);
    if (!dataCredits) return null;

    // const { name,original_name,profile_path} = dataCredits;
    return (
        <section className="credits">
            <h4>Diễn Viên</h4>
            <div className="casts">
                {dataCredits.length > 0 &&
                    dataCredits.slice(0, 4).map((item) => (
                        <div className="cast" key={item.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt={item.name} />
                            <p className="name">{item.name}</p>
                            <p className="original_name">{item.original_name}</p>
                        </div>
                    ))}
            </div>
        </section>
    );
}

export default MovieCredits;
