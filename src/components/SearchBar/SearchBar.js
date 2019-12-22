import React, { Component } from "react";
import { Button, FormControl, InputGroup, Navbar, } from 'react-bootstrap';
import './SearchBar.scss';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialItems: [],
            items: []
        };
    }

    // filterList = e => {
    //     let items = this.state.initialItems;
    //     items = items.filter(item => {
    //         return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    //     });
    //     this.setState({items: items});
    // }

    componentWillMount = () => {
        this.setState({
            initialItems: this.props.content,
            items: this.props.content
        });
    }

    testFilter(e) {
        debugger;
        this.props.filter(e);
    }

    render() {
        return (
            <nav className="navbar">
                US News


                <form>
                    <input type="text" placeholder="" onChange={(e) => this.testFilter(e)}></input>
                </form>
                {/* <InputGroup className="mb-3">
                    <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" onClick={() => this.props.onClick()}>Button</Button>
                    </InputGroup.Append>
                </InputGroup> */}
                {/* <div>
                    {
                        this.state.items.map(item => {
                            return <div key={item}>{item}</div>
                        })
                    }
                </div> */}
            </nav>

        );
    }
}

export default SearchBar;