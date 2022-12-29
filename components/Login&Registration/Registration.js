import { Component } from "react";
import "./Registration.css"

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registrationData: {},
            regEmailError: null,
            regPasswordError: null,
            regNameError: null,
            regMobileError: null,
            regDOBError: null
        }
    }
    handleRegChange = (e) => {
        this.setState({
            registrationData: {
                ...this.state.registrationData,
                [e.target.id]: e.target.value
            }
        })
        this.setState({
            regEmailError: null,
            regPasswordError: null,
            regNameError: null,
            regMobileError: null,
            regDOBError: null
        })

    }
    validateReg = (data) => {
        let status = true;
        if (!data.reg_email) {
            this.setState({
                regEmailError: "Please enter email"

            })
            status = false;
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,4}$/i.test(data.reg_email)) {
            this.setState({
                regEmailError: "Please enter valid email"

            })
            status = false;

        }
        if (!data.reg_password) {
            this.setState({
                regPasswordError: "Please enter Password"

            })
            status = false;
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i.test(data.reg_password)) {
            this.setState({
                regPasswordError: "Must have min 8 chars, at least 1 numb and 1 special symbol"

            })
            status = false;

        }
        if (!data.reg_name) {
            this.setState({
                regNameError: "Please enter Full Name"

            })
            status = false;
        } else if (!/[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/i.test(data.reg_name)) {
            this.setState({
                regNameError: "Enter name with no spaces at start and end"

            })
            status = false;

        }
        if (!data.reg_mobile) {
            this.setState({
                regMobileError: "Please enter mobile number"

            })
            status = false;
        } else if (!(data.reg_mobile.length === 10)) {
            this.setState({
                regMobileError: "Enter mobile number with 10 digits"

            })
            status = false;

        }
        if (!data.reg_DOB) {
            this.setState({
                regDOBError: "Please enter your D.O.B"

            })
            status = false;
        }
        return status;
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.validateReg(this.state.registrationData)
        let validationstatus = this.validateReg(this.state.registrationData)
        if (validationstatus === true) {
            console.log(this.state.registrationData);
            alert("Registration successfull")
        }
    }
    render() {
        return (<div className="popupBox">
            <button className="backButton" onClick={this.props.handleBack}>&larr;</button>
            <form id="formReg" onSubmit={this.handleSubmit}>
                <h1>Register here</h1>
                <input type="email" id="reg_email" placeholder="abc@gmail.com" onChange={this.handleRegChange} />
                <span className="errorMsg">{this.state.regEmailError}</span>
                <input type="password" id="reg_password" placeholder="Set ur Password" onChange={this.handleRegChange} />
                <span className="errorMsg">{this.state.regPasswordError}</span>
                <input type="text" id="reg_name" placeholder="Enter Full Name " onChange={this.handleRegChange} />
                <span className="errorMsg">{this.state.regNameError}</span>
                <input type="tel" id="reg_mobile" placeholder="Enter Mobile.NO" onChange={this.handleRegChange} />
                <span className="errorMsg">{this.state.regMobileError}</span>
                <input type="date" id="reg_DOB" min="01-01-2001" onChange={this.handleRegChange} />
                <span className="errorMsg">{this.state.regDOBError}</span>
                <button type="submit" >Register</button>
            </form>
        </div>)
    }
}











