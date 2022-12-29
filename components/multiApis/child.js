import { Component } from "react";

class ChildComponent extends Component {
    render() {
        return (<>
            {this.props.children}
            {/* fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(result => this.setState({data: result} )) */}

        </>)
    }
}
export default ChildComponent;