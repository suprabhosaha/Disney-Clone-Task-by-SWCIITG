import { Link } from 'react-router-dom';

import hulu_logo from './Hulu-Logo.png';
import logo from './logo.png';
import espn_logo from './ESPN_Plus_Logo.png';
import collab from './collab.png';

const Entry = () => {
    return (
        <div className="entry">
            <div className="container">
                <div className="line-1">
                    <img className = "hulu_logo" src={ hulu_logo} alt="Hulu Logo" />
                    <img className = "logo" src={ logo } alt="Disney+ Logo" />
                    <img className = "espn_logo" src={ espn_logo } alt="ESPN+ Logo" />
                </div>
                <div className="line-2">
                    <Link to="/home"><button id="explore">Explore</button></Link>
                </div>
                <div className="line-3">
                    <p>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/06/21, the price of Disney+ and The Disney Bundle will increase by $1.</p>
                </div>
                <div className="line-4">
                    <img className = "partners" src= { collab } alt="Partners" />
                </div>
            </div>
        </div>
    );
}

export default Entry;