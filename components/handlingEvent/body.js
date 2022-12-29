import { Component } from "react";
import ChildComponent from "./childComponent";


export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUserOnline: false,
        }
    }

    handleUserLoginChange = () => {
        // console.log("this is called");
        this.setState({ isUserOnline: !this.state.isUserOnline })
    }

    render() {
        console.log(this.state);
        return <div>
            {this.state.isUserOnline && <ChildComponent />}
            <button onClick={this.handleUserLoginChange}>click to call child component</button>
        </div>
        // (<> 
        //      <div>
        //     {this.state.isUserOnline ? (
        //         <div onClick={this.handleUserLoginChange}><button>LogOut</button></div>
        //     ) :
        //         (
        //             <div onClick={this.handleUserLoginChange}><button>Login</button></div>

        //         )
        //     }
        // </div> 
        // </>)
    }
}



