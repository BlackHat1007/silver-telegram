import { Component } from "react";
import "./Login.css"

class Login extends Component {
    constructor() {
        super();
        this.state = {
            loginData: {},
            emailError: null,
            passwordError: null
        }
    }
    handleChange = (e) => {
        this.setState({
            loginData: {
                ...this.state.loginData,
                [e.target.id]: e.target.value
            }
        })
        this.setState({
            emailError: null,
            passwordError: null
        })
    }
    validateForm = (data) => {
        // console.log(this.state.loginData);
        // console.log(data.email);
        let status = true;
        if (!data.email) {
            this.setState({
                emailError: "Please enter email"

            })
            status = false;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,4}$/i.test(data.email)) {
            this.setState({
                emailError: "Please enter valid email"

            })
            status = false;

        }
        if (!data.password) {
            this.setState({
                passwordError: "Please enter password ",
            })
            status = false;

        } else if (!(/^[a-zA-Z0-9\s@#$]{7,16}$/).test(data.password)) {
            this.setState({
                passwordError: "Must have 8 chars, uppercase & special char"
            })
            status = false;

        }
        return status;
    }
    handleOnsubmit = (e) => {
        e.preventDefault();
        this.validateForm(this.state.loginData)
        const validationStatus = this.validateForm(this.state.loginData);
        if (validationStatus === true) {
            console.log(this.state.loginData);
            alert("Login successfull !!!")
        }
    }
    render() {
        return (
            <div className="popupBox">

                <button className="backButton" onClick={this.props.handleBack} >&larr;</button>
                <form id="formLogin" onSubmit={this.handleOnsubmit}>
                    <h1>Login</h1>
                    <input type="email" id="email" placeholder="Enter email" onChange={this.handleChange} />
                    <span className="errorMsg">{this.state.emailError}</span>
                    <input type="password" id="password" placeholder="Enter password" onChange={this.handleChange} />
                    <span className="errorMsg">{this.state.passwordError}</span>
                    <button type="submit" >Login</button>
                </form>
            </div>
        )
    }
}


export default Login;








