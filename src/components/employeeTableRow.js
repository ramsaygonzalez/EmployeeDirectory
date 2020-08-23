import React, { Component } from 'react';
import API from "../utils/API";

export default class EmployeeTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee() {
        API.deleteEmployee(this.props.obj._id)
            .then().catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (

            <tr>
                <td align="center"><img src={this.props.obj.picture.thumbnail}></img></td>
                <td align="center">{this.props.obj.name.first}</td>
                <td align="center">{this.props.obj.name.last}</td>
                <td align="center">{this.props.obj.phone}</td>
                <td align="center">{this.props.obj.email}</td>
                <td align="center">{this.props.obj.dob.date}</td>
            </tr >
        );
    }
}