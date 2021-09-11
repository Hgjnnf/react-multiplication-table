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
        let size = Number(prompt("What size do you want the table to be?: "));
        
        if(isNaN(size)) {
            alert("Please enter a number!");
            size = 10;
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
            </div>
        )
    }
}

export default MultTableScreen;