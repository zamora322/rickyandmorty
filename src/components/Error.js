import React from 'react';

const Error = ({ mensaje }) => {
    return (
        <div className="card-panel red">{mensaje}</div>
    );
}

export default Error;