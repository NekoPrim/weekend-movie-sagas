import Title from '../Title/Title';
import Button from '../Button/Button';
import MovieDetails from '../MovieDetails/MovieDetails';
import Genres from '../Genres/Genres';

const Details = () => {

    // render movie  and genres to DOM
    return(
        <div>
            <Title word={'Details'}/>
            <MovieDetails />
            <Genres />
            {/* navigate back to MovieList */}
            <Button />
        </div>
    );
}

export default Details;