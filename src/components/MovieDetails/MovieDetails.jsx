import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './MovieDetails.css';

const MovieDetails = () => {

    // gain access to global variable
    const movie = useSelector(store => store.selected);
    console.log('in MovieDetails selected movie:', movie);

    const dispatch = useDispatch();

    // get data from server
    useEffect(() => {
        dispatch({
            type: 'FETCH_GENRES',
            payload: movie.id
        });
    }, []);

    // append movie info onto DOM
    return(
        <div>
            <h3 className="movieTitle">
                {movie.title}
            </h3>
            <img 
                className="moviePic"
                src={movie.poster}
            />
            <h6 className="movieDesc">
                {movie.description}
            </h6>
        </div>
    );
}

export default MovieDetails;