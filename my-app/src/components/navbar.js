import React from 'react';

const Navbar = () => {
    return (
        
        <div className='navbar'>
            <div className='logo'>

            </div>
            <div className='menu'>
                <ul className='menulist'>
                    <a href='#'><li>Home</li></a>
                    <a href='#'><li>How it Works</li></a>
                    <a href='#'><li>Services</li></a>
                    <a href='#'><li>Reviews</li></a>
                </ul>
            </div>
            <div className='login'>
            <div className='button'><button>Login</button></div>
            <div className='button'><button>Sign Up</button></div>
            </div>
            
        </div>
    );
}

export default Navbar;
