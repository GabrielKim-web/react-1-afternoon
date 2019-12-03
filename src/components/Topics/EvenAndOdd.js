import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor() {
        //we must invoke super before we can use state
        super();

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    evenOrOdd(value) {
        // Method of attack: Since we are receiving a string as a userinput, we must turn the string into an array
        let arr = [...value];
        //REMEMBER: NEVER MODIFY THE STATE OF AN ORIGINAL ARRAY.
        let evens = [];
        let odds = [];
        for (let i = 0; i < arr.length; i++) {
            // Check to see if all of the characters are actually numbers or not.
            // React is pretty picky; it wants me to use the isNaN method to compare NaN...
            if (isNaN(parseInt(arr[i], 10))) {
                alert("Input must be all numbers.")
                return;
            } else if (parseInt(arr[i], 10) % 2 === 0) {
                evens.push(arr[i]);
            } else {
                odds.push(arr[i]);
            }
        }
        this.setState({evenArray: evens, oddArray: odds, userInput: ''})
    }

    handleChange(value) {
        // sets state for input box at that moment, so if i typed 12 it would display 12 in the box rather than displaying nothing
        this.setState({ userInput: value });
    }
    render() {
        return(
            <div className="puzzleBox evenAndOddPB">
                {/* What's `e`? `e` is the event. In this instance we can use the event to get the current value 
                inside of the `input` element. We can access this by doing `e.target.value`. 
                With this setup every time a user types in this `input` field our arrow function gets called, capturing the event, and then calls our method on the class called `handleChange` and passes the value that's currently in the input field. 
                For example if I typed in the `input` field "1,2" then `handleChange` will have been called three times. 
                Every key stroke invokes `handleChange` and passes in the current value, this would look like:
                 First Time: `e.target.value` = "1"
                * Second Time: `e.target.value` = "1,"
                * Third Time: `e.target.value` = "1,2" */}
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                {/* invokes evenOrOdd method with the current state of userInput, so whatever value is in userInput at the time */}
                <button className="confirmationButton" onClick={() => { this.evenOrOdd(this.state.userInput)}}>Split</button>
                {/* JSON.stringify gives display more readable format: [1,2,3,4] as compared to 1234 */}
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    };
}

export default EvenAndOdd;