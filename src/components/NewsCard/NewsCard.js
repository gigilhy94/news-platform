import React, { Component } from "react";
import './NewsCard.scss';
import { Card } from "react-bootstrap";
import moment from 'moment';

class NewsCard extends Component {
    render() {
        return (
            <div className="card-container">
                <Card onClick={() => window.open(this.props.link)}>
                    <Card.Header className="header-section">
                        <div className="header-icon">
                            <div className="header-prefix"><b>{this.props.name.charAt(0)}</b></div>
                        </div>
                        <div>
                            <div className="header-title">{this.props.name}</div>
                            <div className="header-date">{moment(this.props.date).format("YYYY-MM-DD HH:mm")}</div>       
                        </div>
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