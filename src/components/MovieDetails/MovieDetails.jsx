import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Title from '../Title/Title';

const MovieDetails = () => {

    // gain access to global variables
    const movie = useSelector(store => store.selected);
    console.log('in MovieDetails selected movie:', movie);

    const genres = useSelector(store => store.genres);
    console.log('in MovieDetails selected genres:', genres);

    const dispatch = useDispatch();
    const history = useHistory();



    // render movie  and genres to DOM
    return(
        <div>
            <Title word={'Details'}/>
            {/* navigate back to MovieList */}
            <Button />
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