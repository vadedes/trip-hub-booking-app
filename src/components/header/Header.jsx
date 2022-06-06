import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-container'>
                <div className='sub-nav-container'>
                    <div className='sub-nav-item active'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className='sub-nav-item'>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className='sub-nav-item'>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className='sub-nav-item'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className='sub-nav-item'>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                <div className='header-content-wrapper'>
                    <h1>A lifetime of discounts? It's Genius.</h1>
                    <p>Get rewarded for your travels - unlock instant savings of 10% or more with a free Trip Hub account</p>
                    <button>Sign in/Register</button>
                </div>
                <div className='search-bar-container'>
                    <div className='search-input'>
                        <FontAwesomeIcon icon={faBed} className='headerIcon' />
                        <input className='search-form-control' type='text' placeholder='Where are you going?' />
                    </div>
                    <div className='search-input'>
                        <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                        <input className='search-form-control' type='text' placeholder='Calendar' />
                    </div>
                    <div className='search-input'>
                        <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                        <input className='search-form-control' type='text' placeholder='Options' />
                    </div>
                    <div className='search-input'>
                        <button className='search-btn'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
