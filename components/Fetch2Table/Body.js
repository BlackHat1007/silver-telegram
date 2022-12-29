import React, { Component } from "react";
import Table from "./Table";
class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            body: [],
            header: [],
        };
    }

    handleRenderComments = () => {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((res) => res.json())
            .then((result) => {
                const formHeader = Object.keys(result[0]);
                console.log(formHeader)
                this.setState({
                    header: formHeader,
                    body: result,
                });
            });
    };
    handleRenderPhotos = () => {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((res) => res.json())
            .then((result) => {
                const formHeader = Object.keys(result[0]);
                this.setState({
                    header: formHeader,
                    body: result,
                });
            });
    };
    render() {
        return (
            <div>
                <button onClick={this.handleRenderComments}>Comments</button>
                <button onClick={this.handleRenderPhotos}>Photos</button>
                <Table header={this.state.header} body={this.state.body} />
            </div>
        );
    }
}

export default Body;
