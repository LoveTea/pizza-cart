import React from 'react';

const Button = (props) => {
    return (
        <button
            {...props}
            className='py-2 px-4 rounded p-6 text-white bg-blue-500 active:bg-blue-700'
        >
            {props.children}
        </button>
    );
};

export default Button;
