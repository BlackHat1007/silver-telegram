//for lifting state up

import { Component } from "react";


class Child2 extends Component {
    render() {
        console.log(this.props);
        return (
            <>
                <input type="text" onChange={this.props.handleChangeEvent}
                    value={this.props.data}
                />
            </>
        )
    }
}

export default Child2;