import React from 'react';
import { CounterButton } from '../index';

const Counter = ({ value, valueChange }) => {
    return (
        <div className='flex items-center'>
            <CounterButton valueChange={() => valueChange(-1)}>-</CounterButton>
            <div className='w-10 text-center'>{value}</div>
            <CounterButton valueChange={() => valueChange(1)}>+</CounterButton>
        </div>
    );
};

export default Counter;
