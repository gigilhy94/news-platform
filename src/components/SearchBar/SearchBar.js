import React, { Component } from "react";
import { Button, FormControl, InputGroup, Navbar, } from 'react-bootstrap';
import './SearchBar.scss';

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    testFilter(e) {
        this.props.filterNews(e);
    }

    render() {
        return (
            <nav className="navbar">
                US News
                <input type="text" placeholder="" onChange={(e) => this.props.filterNews(e)}></input>
                {/* <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={() => this.props.onClick('search bar')}>Button</Button>
                    </InputGroup.Append>
                </InputGroup> */}
            </nav>
        );
    }
}

export default SearchBar;