import React from 'react';
import MultTable from './MultTable';
import './MultTableScreen.css';

class MultTableScreen extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            tableSize: 10
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let size = Number(prompt("What size do you want the table to be? (Default is 10): "));

        if(isNaN(size) || Number.isInteger(size) === false) {
            alert("Please enter an integer!");
            size = 10;
        }

        if(size <= 0) {
            size = 10;
            alert("Size has to be above 0!");
        }

        this.setState({
            tableSize: size
        });
    }

    render() {
        return (
            <div className="table-screen">
                <header>
                    <h1>React Multiplication Table</h1>
                </header>
                <button onClick={this.handleClick}>Update Table Size</button>
                <MultTable tableSize={this.state.tableSize} className="MultTable"/>
                <p>Made by Gordon Cheung, 2021</p>
            </div>
        )
    }
}

export default MultTableScreen;