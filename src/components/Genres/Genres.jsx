import { useSelector } from 'react-redux';

const Genres = () => {

    // gain access to global variable
    const genres = useSelector(store => store.genres);
    console.log('in MovieDetails selected genres:', genres);

    return(
        <div>
            <h1>Genres</h1>
                {genres.map((genre, i) => (
                    <h3 key={i}>{genre.name}</h3>
                ))}
        </div>
    );
}

export default Genres;