import { useSelector } from 'react-redux';

import './Genres.css';

const Genres = () => {

    // gain access to global variable
    const genres = useSelector(store => store.genres);
    console.log('in MovieDetails selected genres:', genres);

    return(
        <div>
            <h1 className="genreTitle">
                Genres
            </h1>
            <div className="movieGenres">
                {genres.map((genre, i) => (
                    <h3 key={i}>
                        {genre.name}
                    </h3>
                ))}
            </div>
        </div>
    );
}

export default Genres;