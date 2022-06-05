import './navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='nav-container'>
                <div>
                    <span className='logo'>TripHub</span>
                </div>
                <div className='btn-container'>
                    <button>Register</button>
                    <button>Login</button>
                </div>
            </div>
        </div>
    );
};
export default Navbar;
