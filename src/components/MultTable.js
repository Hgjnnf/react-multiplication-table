import React from 'react';
import './MultTable.css';

class MultTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            squareCoords: {
                x: null,
                y: null
            }
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(x, y) {
        if(x === 0 || y === 0) {
            return;
        } else {
            //sets the coordinates of the cell
            this.setState({
                squareCoords: {
                    x, y
                }
            })
        }
    }

    getSelectedText(x, y) {
        const squareCoords = this.state.squareCoords;

        //checks for the coords of the cells and show text accordingly
        if(x === 0 && y === 0) {
            return 'x';
        } else if(x === 0) {
            return y;
        } else if(y === 0) {
            return x;
        } else if(squareCoords.x === x && squareCoords.y === y) {
            return x * y;
        } else {
            return '';
        }
    }

    render() {
        //gets the size of the table from its state
        const tableSize = this.props.tableSize;

        //generates an array from 0 to tableSize
        const sizeArray = Array.from(Array(tableSize + 1).keys());

        return (
            <div className="mult-table">
                <table>
                    <tbody>{
                        //generates rows
                        sizeArray.map(
                            (y) => {
                                return(
                                    <tr key={y}>{
                                        //generates columns
                                        sizeArray.map(
                                            (x) => {
                                                return(
                                                    <td key={x} onClick={() => this.handleClick(x, y)} className={(x === 0 || y === 0) ? 'mult-header' : 'mult-body'}>
                                                        {
                                                            //generates text based on the table cell selected
                                                            this.getSelectedText(x, y)
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

export default MultTable;