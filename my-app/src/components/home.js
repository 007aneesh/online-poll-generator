import React from 'react';
import Navbar from './navbar'; 
const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <div className='main'>
                <h1 className='heading'></h1>
                <p className='text'></p>
                <div className='inputfield'>
                    <input type={'text'}></input>
                    <div className='button'><button>Next</button></div>
                </div>

            </div>
        </React.Fragment>
    );
}

export default Home;