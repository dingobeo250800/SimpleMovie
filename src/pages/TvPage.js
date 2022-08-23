import React from 'react';
import MovieList from '~/components/MovieList';
// import MovieList from '~/components/MovieList';
import Banner from '~/layouts/components/Banner';
function TvPage(props) {
    return (
        <div>
            <Banner />
            <>
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

export default TvPage;
