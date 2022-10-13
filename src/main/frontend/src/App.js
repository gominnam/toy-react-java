import React, {useState, useEffect} from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./components/Login";
import Chat from "./components/Chat";
import Board from "./components/Board";

function App() {

    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/chat" element={<Chat/>}/>
            <Route exact path="/board" element={<Board/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default App;
