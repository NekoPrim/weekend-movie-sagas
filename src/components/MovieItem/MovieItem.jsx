import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './MovieItem.css';

const MovieItem = ({movie}) => {

    const dispatch = useDispatch();
    const history = useHistory();

    // function called with onClick
    const handleSelected = (movie) => {
        console.log('in handleSelected with movie:', movie.id);

        // send data to reducer
        dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: movie
        });
        history.push('/details');
    }

    return(
            <div key={movie.id} className="card">
                <h3 className="movieName">{movie.title}</h3>
                <img
                    className="moviePoster"
                    src={movie.poster} 
                    onClick={() => handleSelected(movie)} 
                />
            </div>
    );
}

export default MovieItem;