import React from 'react';
import { NavLink } from 'react-router-dom';
const  Error=()=> {
    return (
        <div className='error'>
            <h1>404 Error Page</h1>
            <p>sorry,page does'nt exist</p>
            <NavLink to='/'>go back to home</NavLink>
        </div>
    )
}

export default Error;