import { Component } from "react"
import Login from "./Login";
import Registration from "./Registration";
import "./Mainpage.css"

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MainPage: null,
        }
    }
    handleBack = () => {
        this.setState({ MainPage: null })
    }
    handleLoginPopup = () => {
        this.setState({ MainPage: <Login handleBack={this.handleBack} /> })
    }
    handleRegistrationPopup = () => {
        this.setState({ MainPage: <Registration handleBack={this.handleBack} /> })

    }
    render() {
        return (
            <div id="mainContainer_home">
                <div id="popupButtons">
                    <button onClick={this.handleLoginPopup}>Login</button>
                    <button onClick={this.handleRegistrationPopup}>Register</button>
                </div>
                {this.state.MainPage}
            </div>
        )
    }
};

