import { Component } from "react";

class FormsBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
        }
    }

    handleFormChange = (e) => {
        // console.log("hola");
        // console.log(e.target.id, e.target.value);
        this.setState({ data: { ...this.state.data }, [e.target.id]: e.target.value })

    }
    handleSubmit = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div className="formData">
                <input type="text" id="userName" placeholder="enter userName" onChange={this.handleFormChange} />
                <input type="password" id="password" placeholder="enter password" onChange={this.handleFormChange} />
                <button onClick={this.handleSubmit}>Login</button>
            </div>
        )
    }
}
export default FormsBody;

