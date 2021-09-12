import React from 'react';
import MultTable from './MultTable';
import './MultTableScreen.css';

//this component adds the update function and a title to the multiplication table
class MultTableScreen extends React.Component {
    constructor(props){
        super(props);

        //the size of the table is a state here which will be passed down to the MultTable component as a prop
        this.state = {
            //the default is 10
            tableSize: 10
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //prompts the user about the tableSize and converts the response(string, initially) to the number type
        let size = Number(prompt("What size do you want the table to be? (Default is 10): "));

        //checks if the response is empty or non-integer and resets the size to the default is that is true
        if(isNaN(size) || Number.isInteger(size) === false) {
            alert("Please enter an integer!");
            size = 10;
        }

        //checks if the response is smaller or equal to 0 and resets the size to default if true
        if(size <= 0) {
            alert("Size has to be above 0!");
            size = 10;
        }

        //sets the tableSize state to the response
        this.setState({
            tableSize: size
        });
    }

    render() {
        /*
            Adds a title and an updating button with a click handler to the existing table component
        */
        return (
            <div className="table-screen">
                <header>
                    <h1>React Multiplication Table</h1>
                </header>
                <button onClick={this.handleClick}>Update Table Size</button>
                <MultTable tableSize={this.state.tableSize}/>
                <p>Made by Gordon Cheung, 2021</p>
            </div>
        )
    }
}

//exports the component
export default MultTableScreen;