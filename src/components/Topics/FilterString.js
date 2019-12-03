import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            unFilteredArray: ['I really want to sleep right now.', 
            'Coding is fun, but sleeping right now feels nice.',
            'I have made the best decision of my life.',
            'Time to keep on going!'],
            userInput: '',
            filteredArray: []
        };
    }
    handleChange(value) {
        this.setState({userInput: value});
    }
    filterArray(value) {
        const {unFilteredArray} = this.state;
        let filter = unFilteredArray.filter((element) => element.includes(value));
        this.setState({filteredArray: filter, userInput: ''})
    }
    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterArray(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    };
}

export default FilterString;