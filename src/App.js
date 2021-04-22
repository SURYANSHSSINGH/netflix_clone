import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
        return ( 
        <div className ="App">
            <h1>Netflix</h1>
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOrigials}/>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Trending Now"/>
            <Row title="Trending Now"/>
            <Row title="Trending Now"/>
            <Row title="Trending Now"/>
            </div>
        );
    }

export default App;