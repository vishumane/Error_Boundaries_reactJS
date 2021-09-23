
import {React, lazy,Suspense } from 'react';
const Component = lazy(() => import("./Component.jsx"));

function Myapp() {
    return (
        <div>
            <Suspense fallback={<div> <Component/></div>}/>
    
        </div>
    )
}
export default Myapp;
