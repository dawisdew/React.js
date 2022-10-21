import React from "react";
import './App.css';
import MainPage from "./pages/mainPage/MainPage"
import AboutPage from './pages/mainPage/aboutPage/AboutPage';
import {Header, Footer, sayHello} from "./components/template/Template"
import UserPage from './pages/userPage/UserPage';
import AboutUs from "./pages/aboutUs/AboutUs";

function App() {
    // sayHello()

    const text = {
        title: 'Hello',
        subtitle: 'lorem lorem lorem'
    }



    return (
        <div className="App">
            {/*
      <Header/>
      <MainPage/>
      <h1>------------------</h1>
      <AboutPage/>
      <Footer/> */}
            {/*<UserPage/>*/}
            <AboutUs text={text}/>
        </div>
    );
}

export default App;


