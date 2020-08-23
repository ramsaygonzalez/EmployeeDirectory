import React, { Component } from "react";
import { Row, Col, Container, Jumbotron, Form } from 'react-bootstrap';
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
            <div>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Jumbotron fluid>
                                <Container>
                                    <h1 style={{ textAlignVertical: "center", textAlign: "center", }}>Employee Directory</h1>
                                    <p style={{ textAlignVertical: "center", textAlign: "center", }}>
                                        Click on carrots to filter heading or use the search box to narrow your results.
    </p>
                                    <Form>
                                        <Form.Control style={{ align: "center", width: "30%" }} placeholder="Search" />
                                    </Form>
                                </Container>
                            </Jumbotron>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}><EmployeeList /></Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default Employees;
