import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Main/Content";
import Footer from "./Components/Footer/Footer";

function App() {

    const menuItems = [
        {
            title: 'Main',
            url: 'https://google.com'
        },
        {
            title: 'About',
            url: 'https://google.com'
        },
        {
            title: 'Contacts',
            url: 'https://google.com'
        },
        {
            title: 'Deals',
            url: 'https://google.com'
        }
    ];
    return (
        <div className="App">
            <Header menuItems={menuItems} />
            <Content />
            <Footer menuItems={menuItems}/>
        </div>
    );
}

export default App;
