import React, { Component } from "react";
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './SearchBar.scss';

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar">
                US News
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button variant="outline-secondary">Button</Button>
                    </InputGroup.Append>
                </InputGroup>
            </nav>
        );
    }
}

export default SearchBar;