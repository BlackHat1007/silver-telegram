import { Component } from "react";
import "./body.css"




// function  Img(){
//     return <img src={bgimg} alt="no pic"></img>
// }
// export default Img;


class Img extends Component {
    constructor() {
        super();
        this.state = {
            // count: 0
            data: []
        }
        // console.log("====>constructor");
    }



    // handleInc = (e) => {
    //     this.setState({ count: this.state.count + 1 })
    //     // this.setState({ name: "anvesh" })
    // }
    // handleDec = (e) => {
    //     this.setState({ count: this.state.count - 1 })
    // }

    componentDidMount() {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(result => this.setState({ data: result }))
            .catch(err => console.log(err))
    }
    shouldComponentUpdate() {
        return true;
    }
    getSnapshotBeforeUpdate(preProps, preState) {
        console.log(preProps, preState);
    }

    render() {
        console.log(this.state.data);
        console.log("====>render");

        return <div id="maindiv">
            {this.state.data.map((item) => (

                <div className="productdiv">
                    <h4>{item.category}</h4>
                    <img src={item.image} style={{ height: "150px", width: "150px" }} />
                    <h4>{item.title}</h4>
                    <h5>${item.price}</h5>
                </div>
            ))}
        </div>
    }
}


export default Img;