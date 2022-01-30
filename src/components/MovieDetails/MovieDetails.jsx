import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Title from '../Title/Title';
import Button from '../Button/Button';
import Details from '../Details/Details';

const MovieDetails = () => {

    // gain access to global variables
    const movie = useSelector(store => store.selected);
    console.log('in MovieDetails selected movie:', movie);

    const genres = useSelector(store => store.genres);
    console.log('in MovieDetails selected genres:', genres);




    // render movie  and genres to DOM
    return(
        <div>
            <Title word={'Details'}/>
            {/* navigate back to MovieList */}
            <Button />
            <Details />
            <h1>Genres</h1>
                {genres.map((genre, i) => (
                    <h3 key={i}>{genre.name}</h3>
                ))}
        </div>
    );
}

export default MovieDetails;