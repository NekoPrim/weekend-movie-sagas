import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const MovieDetails = () => {

    const movie = useSelector(store => store.selected);
    console.log('in MovieDetails selected movie:', movie);

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
            type: 'FETCH_GENRES'
        });
    }, []);

    return(
        <div>
            <button onClick={handleBack}>Back</button>
            <h3>{movie.title}</h3>
            <img src={movie.poster}/>
            <h6>{movie.description}</h6>
        </div>
    );
}

export default MovieDetails;