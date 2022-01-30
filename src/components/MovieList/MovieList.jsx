import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Title from '../Title/Title';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <Title word={'Movie List'}/>
            <section className="movies">
                {movies.map(movie => (
                    <MovieItem movie={movie} />
                ))}
            </section>
        </main>

    );
}

export default MovieList;