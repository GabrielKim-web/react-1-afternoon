import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [{name: 'boop', age: 69},
                {name: 'oof', favNum: 420, favFood: "pasta"},
                {name: 'kapp', favNum: 82, job: "gamer"}],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange(value) {
        this.setState({ userInput: value });
    }
    filterThis(value) {
        const {unFilteredArray} = this.state;
        let filteredArray = [];
        for (let i = 0; i < unFilteredArray.length; i++) {
            if ( unFilteredArray[i].hasOwnProperty(value)) {
                filteredArray.push(unFilteredArray[i]);
            }
        }
        this.setState({filteredArray: filteredArray, userInput: ''});
    }
    render() {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => {this.filterThis(this.state.userInput)}}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    };
}

export default FilterObject;