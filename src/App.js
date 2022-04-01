import React from 'react';

import Header from './components/header/index';
import { useState } from 'react';

import { Switch, Route } from 'react-router-dom';
import MainContant from './components/mainContant/MainContant';
import ThankYou from './components/thankyou/ThankYou';

const ButtonColor = React.createContext();

function App() {
    const [color, setColor] = useState('green');

    function changeButtonColor(color) {
        setColor(color === 'green' ? 'red' : 'green');
    }
    return (
        <ButtonColor.Provider value={color}>
            <Header onClick={changeButtonColor} />
            <Switch>
                <Route exact path="/" component={MainContant} />
                <Route exact path="/thankyou" component={ThankYou} />
            </Switch>
        </ButtonColor.Provider>
    );
}

export default App;
export { ButtonColor };
