import { Component } from "react";
import Parent from "./2Parent";


export default class GrandParent extends Component {
    render() {
        return (<>
            <Parent />
        </>)
    }
}