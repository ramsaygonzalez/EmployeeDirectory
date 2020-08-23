import React, { Component } from "react";
import { Table, Container } from 'react-bootstrap';
import API from "../utils/API"
import EmployeeTableRow from "./employeeTableRow";



export default class EmployeeList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employees: []
        };
    }

    componentDidMount() {
        API.getEmployees()
            .then(results => {
                this.setState({
                    employees: results.data.results
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DataTable() {
        return this.state.employees.map((res, i) => {
            return <EmployeeTableRow obj={res} key={i} />;
        });
    }


    render() {
        return (
            <Container fluid>
                <div className="table-wrapper">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>DOB</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.DataTable()}
                        </tbody>
                    </Table>
                </div>
            </Container>
        );
    }
}
