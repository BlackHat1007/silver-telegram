import React, { Component } from "react";
import "./Table.css";

export default class Table extends Component {
    render() {
        const { header, body } = this.props;
        console.log(this.props);
        return (
            <table id="customers"  >
                <thead>
                    <tr>
                        {header.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {body.map((obj, index) => (
                        <tr key={index}>
                            {header.map((item, index) => (
                                <td key={index}>{
                                    item === "url" || item === "thumbnailUrl" ?
                                        <img src={obj[item]} style={{ height: "60px", width: "300px" }} /> :
                                        obj[item]
                                }</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}
