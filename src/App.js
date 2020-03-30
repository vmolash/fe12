import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Main/Content";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Content />
            <Footer />
        </div>
    );
}

export default App;
