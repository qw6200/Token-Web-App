import React, { Component } from 'react';
import './party.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('root'));
class Party extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }
    render() {
        return (
            <div>
                <Link to="/">
                    <input type="button" value="Back" />
                </Link>
                <h3> Party </h3>
                <ol>
                    {this.props.passedVal.map((person) => (
                        <div key={person}>
                            <li>{person}</li>
                        </div>
                    ))}
                </ol>
                <input type='button' class="btn btn-info" value='Add Expense' onClick={this.handleOpenModal} />
                <Modal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <h3>Add Expense</h3>
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                </Modal>
            </div>

        )
    }
}

export default Party;