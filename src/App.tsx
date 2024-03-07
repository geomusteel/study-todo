import React from 'react';
import './App.css';
import {createGlobalStyle} from "styled-components";
import {reset} from "styled-reset";
import MainPage from "./pages/MainPage";
import {TodoProvider} from './context/TodoContext';

const GlobalStyle = createGlobalStyle`
    ${reset}
`;

function App() {
    return (

        <div className="App">
            <TodoProvider>
                <GlobalStyle/>
                <MainPage/>
            </TodoProvider>
        </div>

    );
}

export default App;
