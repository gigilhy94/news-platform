import React, { Component } from "react";
import './NewsCard.scss';
import { Card } from "react-bootstrap";

class NewsCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }} onClick={() => window.open(this.props.link)}>
                    <Card.Header>
                        {this.props.name}
                        {this.props.date}
                    </Card.Header>
                    <Card.Img variant="top" src={this.props.image} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default NewsCard;