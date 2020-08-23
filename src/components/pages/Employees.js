import React, { Component } from "react";
import API from "../../utils/API"
import EmployeeList from "../employeelist";

class Employees extends Component {
    state = {
        search: "",
        employees: [],
        results: [],
        error: ""
    };

    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    componentDidMount() {
        API.getEmployees()
            .then(results => this.setState({ employees: results.data.results }))
            .catch(err => console.log(err));
    }
    render() {
        return (
            
            <div><EmployeeList /></div>
            
        );
    }
}

export default Employees;
