import { Component } from "react";
import Child from "./3.child";
import Child2 from "./3.child2";


class Parent extends Component {
    constructor(props) {
        super();
        // this.state = {
        //     data: "",
        // }
    }
    handleChangeEvent = (e) => {
        console.log("this is cbfn", e.target.value);
        // this.setState({ data: e.target.value })
    }
    render() {
        return (
            <>
                <Child
                    handleChangeEvent={this.handleChangeEvent}
                // data={this.state.data}
                />
                {/* <Child2
                    handleChangeEvent={this.handleChangeEvent}
                    data={this.state.data}
                /> */}

            </>
        )
    }
}

export default Parent;