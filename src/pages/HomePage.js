import React from 'react';
import MovieList from '~/components/MovieList';
import Banner from '~/layouts/components/Banner';

function HomePage(props) {
    return (
        <div style={{ height: '100vh' }}>
            <Banner />
            <>
                <section className="section__list-movie">
                    <MovieList DesignOne="DesignOne" type="now_playing">
                        Now Playing
                    </MovieList>
                </section>
                <section className="section__list-movie">
                    <MovieList type="upcoming">Upcoming</MovieList>
                </section>
                <section className="section__list-movie">
                    <MovieList DesignOne="DesignOne" type="top_rated">
                        Top Rated
                    </MovieList>
                </section>
                <section className="section__list-movie">
                    <MovieList type="popular">Popular</MovieList>
                </section>
            </>
        </div>
    );
}

export default HomePage;
