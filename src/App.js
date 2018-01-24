import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from "./robots";
import Searchbox from './Searchbox';
import './index.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        }
        render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
            return (
                <div className="main-header">
                    <h1 className="main-header__title">CATS SEARCH</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobots}/>
                </div>
            );
        }
    };

    export default App;