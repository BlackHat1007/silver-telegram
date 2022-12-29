import { Component } from "react";


class Child extends Component {
    render() {
        console.log(this.props);
        return (
            <>
                <input type="text" onChange={this.props.handleChangeEvent}
                // value={this.props.data}
                />
            </>
        )
    }
}

export default Child;