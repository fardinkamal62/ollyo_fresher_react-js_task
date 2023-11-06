import * as React from 'react';

import './App.css';

import Gallery from './Gallery';

function App() {
    return (
        <div className="App">
            <div className={'container'}>
            </div>
            <header className={'App-header'} style={{ position: 'relative' }}>
                Fardin's Image Gallery
                <div className={'square-box'} style={{ left: '70%' }}></div>
                <div className={'square-box'} style={{ top: '47%', left: '67%', backgroundColor: '#9de89d' }}></div>
            </header>
            <Gallery />
        </div>
    );
}

export default App;
