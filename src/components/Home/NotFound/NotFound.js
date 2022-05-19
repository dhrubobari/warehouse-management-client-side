import React from 'react';
import not404 from "../../../404.jpeg";

const NotFound = () => {
    return (
        <div>
            <img src={not404} alt="" style={{width: '50%'}}/>
        </div>
    );
};

export default NotFound;