import './Success.css';
import { ReactComponent as IconSuccess } from './images/icon-success.svg';

const Success = ({successful, emailAddress}) => {

    const handleClick = () => {
        successful(false);
    }

    return ( 
        <div className="success">
            <div className="success-content">
            <IconSuccess />
            <h1>Thanks for subscribing!</h1>

            <p>A confirmation email has been sent to <b>{emailAddress}</b>. Please open it and click the button inside to confirm your subscription.</p>
            <button onClick={handleClick}>Dismiss message</button>
            </div>
        </div>
     );
}
 
export default Success;