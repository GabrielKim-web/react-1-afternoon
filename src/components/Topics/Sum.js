import React, {Component} from 'react';

class Sum extends Component {
    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    handleChange1(value) {
        this.setState({number1: value});
    }
    handleChange2(value) {
        this.setState({number2: value});
    }
    getSum(num1, num2) {
        //Checks if they are actually numbers.
        let add;
        if (isNaN(parseInt(num1, 10)) || isNaN(parseInt(num2, 10))) {
            alert("Both inputs must be only numbers!");
            return;
        } else{
            add = parseInt(num1, 10) + parseInt(num2, 10);
        }
        this.setState({sum: add})
    }
    render() {
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => this.handleChange1(e.target.value)}></input>
                <input className="inputLine" onChange={(e) => this.handleChange2(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.getSum(this.state.number1, this.state.number2)}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    };
}

export default Sum;