import React from 'react';
import './App.css';
import {createGlobalStyle} from "styled-components";
import {reset} from "styled-reset";
import MainPage from "./pages/MainPage";

const GlobalStyle = createGlobalStyle`
    ${reset}
`;

function App() {
    return (

        <div className="App">
            <GlobalStyle/>
            <MainPage/>
        </div>

    );
}

export default App;
