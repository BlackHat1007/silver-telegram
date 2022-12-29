import { Component } from "react"
import ChildComponent from "./child";


export default class Parent extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }
    componentDidMount() {

        fetch("https://jsonplaceholder.typicode.com/comments")
            .then(res => res.json())
            .then(result => this.setState({ data: result }))


    }

    render() {
        // console.log(this.state.data);
        return (<>
            {/* <ChildComponent> */}


            <table className="productdiv" border="2">
                <tr >
                    <th>Id</th>
                    <th>name</th>
                    <th>Email</th>
                    <th>Body</th>


                </tr>
                {this.state.data.map((item) => (
                    <tr>
                        <td> {item.id}</td>
                        <td> {item.name}</td>
                        <td> {item.email}</td>
                        <td> {item.body}</td>


                    </tr>
                ))}
            </table>
            {/* </ChildComponent> */}
        </>)
    }
}



