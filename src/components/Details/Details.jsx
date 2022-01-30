import { useSelector } from 'react-redux';

const Details = () => {

    // gain access to global variable
    const movie = useSelector(store => store.selected);
    console.log('in MovieDetails selected movie:', movie);

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