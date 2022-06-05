import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-container'>
                <div className='sub-nav-container'>
                    <div className='sub-nav-item active'>
                        <span>Stays</span>
                    </div>
                    <div className='sub-nav-item'>
                        <span>Flights</span>
                    </div>
                    <div className='sub-nav-item'>
                        <span>Car rentals</span>
                    </div>
                    <div className='sub-nav-item'>
                        <span>Attractions</span>
                    </div>
                    <div className='sub-nav-item'>
                        <span>Airport taxis</span>
                    </div>
                </div>
                <div className='header-content-wrapper'>
                    <h1>A lifetime of discounts? It's Genius.</h1>
                    <p>Get rewarded for your travels - unlock instant savings of 10% or more with a free Trip Hub account</p>
                    <button>Sign in/Register</button>
                </div>
                <div className='search-bar-container'>
                    <form className='search-input'>
                        <input className='search-form-control' type='text' placeholder='Where are you going?' />
                    </form>
                    <div>Calendar</div>
                    <div>Options</div>
                    <div>Search Button</div>
                </div>
            </div>
        </div>
    );
};
export default Header;
