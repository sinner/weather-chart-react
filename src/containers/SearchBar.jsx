import React, { Component } from 'react';

export default class SearchBar extends Component {

    constructor (props) {
        super(props);

    }

    render () {
        return (
            <form className="input-group">
                <input
                  placeholder="Get a five-day forecast in your favorite cities"
                  className=""
                  value=""
                  onChange=""/>
                <span>
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }

}