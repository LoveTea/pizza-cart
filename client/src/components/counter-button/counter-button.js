import React from 'react';

const CounterButton = ({ valueChange, value, children }) => {
    return (
        <button
            className='bg-blue-500 active:bg-blue-700 rounded-full w-10 h-10 text-white'
            onClick={() => valueChange(value)}
        >
            {children}
        </button>
    );
};

export default React.memo(CounterButton);
