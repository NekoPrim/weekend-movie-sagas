import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Title from '../Title/Title';

const MovieDetails = () => {

    // gain access to global variables
    const movie = useSelector(store => store.selected);
    console.log('in MovieDetails selected movie:', movie);

    const genres = useSelector(store => store.genres);
    console.log('in MovieDetails selected genres:', genres);

    const dispatch = useDispatch();
    const history = useHistory();

    // function called with onClick
    const handleBack = () => {
        console.log('go back');
        history.push('/');
    }

    // get data from server
    useEffect(() => {
        dispatch({
            type: 'FETCH_GENRES',
            payload: movie.id
        });
    }, []);

    // render movie  and genres to DOM
    return(
        <div>
            <Title word={'Details'}/>
            <button onClick={handleBack}>Back</button>
            <h3>{movie.title}</h3>
            <img src={movie.poster}/>
            <h6>{movie.description}</h6>
            <h1>Genres</h1>
                {genres.map((genre, i) => (
                    <h3 key={i}>{genre.name}</h3>
                ))}
        </div>
    );
}

export default MovieDetails;