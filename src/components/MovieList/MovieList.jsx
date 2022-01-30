import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // function called with onClick
    const handleSelected = (movie) => {
        console.log('in handleSelected with movie:', movie.id);

        // send data to reducer
        dispatch({
        //     type: 'FETCH_GENRES',
        //     payload: movie.id
        // },
        // {
            type: 'SET_SELECTED_MOVIE',
            payload: movie
        });
        history.push('/details');
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img 
                                src={movie.poster} 
                                alt={movie.title} 
                                onClick={() => handleSelected(movie)} 
                            />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;