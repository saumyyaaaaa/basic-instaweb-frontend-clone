import React, { Component } from 'react';
import "./Home.css";
import NavBar from '../../Components/NavBar/NavBar';
import MainContent from '../../Components/MainContent/MainContent';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = { }
    }
    render() {
        return (
            <><NavBar /><MainContent /></>
        );
    }
}

export default Home;