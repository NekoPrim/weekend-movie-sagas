import { useHistory } from 'react-router-dom';

import './Button.css'

const Button = () => {

    const history = useHistory();

    // function called with onClick
    const handleBack = () => {
        console.log('go back');
        history.push('/');
    }

    return(
        <button className="backBtn" onClick={handleBack}>
            Back
        </button>
    );
}

export default Button;