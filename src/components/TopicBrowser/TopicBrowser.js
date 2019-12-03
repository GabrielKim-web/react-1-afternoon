/* This project will (hopefully) be continuously updated as I encounter
more toy problems to implement here! */

import React, {Component} from 'react';
// .. means to go up one level to the parent directory above it
import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterObject';
import FilterString from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';

class TopicBrowser extends Component {
    render() {
        return (
            <div className="Topic">
                <EvenAndOdd />
                <FilterObject />
                <FilterString />
                <Palindrome />
                <Sum />
            </div>
        )
    };
}

export default TopicBrowser;