import Title from '../Title/Title';
import Button from '../Button/Button';
import Details from '../Details/Details';
import Genres from '../Genres/Genres';

const MovieDetails = () => {

    // render movie  and genres to DOM
    return(
        <div>
            <Title word={'Details'}/>
            {/* navigate back to MovieList */}
            <Button />
            <Details />
            <Genres />
        </div>
    );
}

export default MovieDetails;