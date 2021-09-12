import React from 'react';
import './MultTable.css';

class MultTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //the coordinate of the table cell being clicked on; default is null
            squareCoords: {
                x: null,
                y: null
            }
        };
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(x, y) {
        if(x === 0 || y === 0) {
            //returns nothing if x or y equals to 0 (0th row or 0th column) because that's the header of the table
            return;
        } else {
            //sets the coordinates of the cell based on the table cell selected
            this.setState({
                squareCoords: {
                    x, y
                }
            })
        }
    }

    displayText(x, y) {
        const squareCoords = this.state.squareCoords;

        //checks for the coords of the cells and show text accordingly
        if(x === 0 && y === 0) {
            return 'x';
        } else if(x === 0) {
            return y;
        } else if(y === 0) {
            return x;
        } 
        //checks to see if the selected cell is the same as the x & y from the input and then returns the product of x & y
        else if(squareCoords.x === x && squareCoords.y === y) {
            return x * y;
        } else {
            //returns nothing if none of the conditions above is met
            return '';
        }
    }

    render() {
        //gets the size of the table from the props
        const tableSize = this.props.tableSize;

        //generates an array from 0 to tableSize: [0, 1, 2, ..., tableSize]
        const sizeArray = Array.from(Array(tableSize + 1).keys());

        return (
            <div className="mult-table">
                <table>
                    <tbody>{
                        //generates rows using the .map array iterator
                        sizeArray.map(
                            (y) => {
                                return(
                                    <tr key={y}>{
                                        //generates columns using the .map array iterator
                                        sizeArray.map(
                                            (x) => {
                                                /*  returns table cells with handleClick assigned to each; 
                                                    uses the arrow function to avoid 'Maximum updated depth exceeded' error.
                                                    assign className to different cells depending on the x & y coords;
                                                    x or y is 0 will be assigned to be a header and the rest is the body.
                                                */
                                                return(
                                                    <td key={x} onClick={() => this.handleClick(x, y)} className={(x === 0 || y === 0) ? 'mult-header' : 'mult-body'}>
                                                        {
                                                            //generates text based on the table cell
                                                            this.displayText(x, y)
                                                        }
                                                    </td>
                                                )
                                            }
                                        )
                                   }</tr>
                                )
                            }
                        )

                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

//exports the component MultTable
export default MultTable;