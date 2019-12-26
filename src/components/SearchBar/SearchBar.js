import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import './SearchBar.scss';
import { Navbar } from "react-bootstrap";

class SearchBar extends Component {
    render() {
        return (
            <Navbar className="nav-section">
                US News
                <Navbar.Collapse className="justify-content-end">
                    <div className="input-section">
                        <span><FaSearch className="icon"/></span>
                        <span><input placeholder="Search" onChange={(e) => this.props.filterNews(e.target.value)}></input></span>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default SearchBar;