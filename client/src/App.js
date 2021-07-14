import React from 'react';
import { Header } from './components';
import { Switch, Route } from 'react-router-dom';
import { Cart, Home } from './pages';

const App = () => {
    return (
        <>
            <div className='max-w-screen-xl mx-auto px-8'>
                <Header />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/cart' component={Cart} />
                </Switch>
            </div>
        </>
    );
};

export default App;
