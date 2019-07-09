import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";


export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(results => {
      this.setState({
        students: results.data
      });
    });
  }

  render() {
    const {students} = this.state
    const mappedStudents = students.map(student => {
      return (
        <Link to={`/student/${student.id}`}>
        <h3 key={student.id}>{student.first_name} {student.last_name}</h3>
        </Link>
      )
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <Link to="/">
        <button>Back</button>
        </Link>
        <h2>ClassList:</h2>
        <div>{mappedStudents}</div>

      </div>
    )
  }
}