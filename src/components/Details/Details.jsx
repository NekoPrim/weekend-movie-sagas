import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Details = () => {

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
            <h3>{movie.title}</h3>
            <img src={movie.poster}/>
            <h6>{movie.description}</h6>
        </div>
    );
}

export default Details;