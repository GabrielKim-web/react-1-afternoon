import React, {Component} from 'react';

//we need to turn this string into an array, reverse that array, then compare it
class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(value) {
        this.setState({ userInput: value });
    }

    checkPali(value) {
        //need to turn value into array
        let arr = value.split('');
        //we reverse arr, then join the elements back into its reversed string
        //then, we compare it to the original string
        // let isPali = arr.reverse().join('') === value
        arr.reverse().join('') === value ?
        this.setState({palindrome: 'true'}) : 
        this.setState({palindrome: 'false'})
    }
    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.checkPali(this.state.userInput)}>Check</button>
                <span className="resultsBox">Palindrome? {this.state.palindrome}</span>
            </div>
        )
    };
}

export default Palindrome;