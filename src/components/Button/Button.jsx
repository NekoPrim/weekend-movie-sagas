import { useHistory } from 'react-router-dom';

const Button = () => {

    const history = useHistory();

    // function called with onClick
    const handleBack = () => {
        console.log('go back');
        history.push('/');
    }

    return(
        <button onClick={handleBack}>Back</button>
    );
}

export default Button;