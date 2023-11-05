import * as React from 'react';

import './App.css';

import Gallery from './Gallery';

function App() {
    return (
        <div className="App">
            <div className={'container'}>
                <div className={'square-box'} style={{ left: '20px' }}></div>
            </div>
            <header className={'App-header'}>
                Fardin's Image Gallery
            </header>
            <Gallery/>
        </div>
    );
}

export default App;
