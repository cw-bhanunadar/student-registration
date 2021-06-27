import React, { Component } from "react";
import ReactTable from "react-table-6";
import api from "../api";
import styled from "styled-components";

import "react-table-6/react-table.css";
const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;
const Update = styled.div`
  color: #ef9b0f;
  cursor: pointer;
`;
const Delete = styled.div`
  color: #ff0000;
  cursor: pointer;
`;
class UpdateStudent extends Component {
  updateUser = (event) => {
    event.preventDefault();
    window.location.href = `/student/update/${this.props.id}`;
  };

  render() {
    return <Update onClick={this.updateUser}>Update</Update>;
  }
}

class DeleteStudent extends Component {
  deleteUser = (event) => {
    event.preventDefault();

    if (
      window.confirm(
        `Do you want to delete the Student ${this.props.id} permanently?`
      )
    ) {
      api
        .deleteStudent(this.props.id)
        .then((res) => {
          window.location.reload();
        })
        .catch(function () {});
    }
  };

  render() {
    return <Delete onClick={this.deleteUser}>Delete</Delete>;
  }
}
class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    let response = this.handleApiResponse.bind(this);
    api
      .getAll()
      .then(response)
      .catch(function () {});
  }
  handleApiResponse = function (res) {
    this.setState({ students: res.data, isLoading: false });
  };
  render() {
    let { students, isLoading } = this.state;
    console.log(students);
    let showTable = true;
    if (!students.length) {
      showTable = false;
    }
    const column = [
      {
        Header: "ID",
        accessor: "id",
        filterable: true,
      },
      {
        Header: "Name",
        accessor: "name",
        filterable: true,
      },
      {
        Header: "Department",
        accessor: "department",
        filterable: true,
      },
      {
        Header: "",
        accessor: "",
        Cell: function (props) {
          return (
            <span>
              <DeleteStudent id={props.original.id} />
            </span>
          );
        },
      },
      {
        Header: "",
        accessor: "",
        Cell: function (props) {
          return (
            <span>
              <UpdateStudent id={props.original.id} />
            </span>
          );
        },
      },
    ];

    return (
      <Wrapper>
        {showTable && (
          <ReactTable
            data={students}
            columns={column}
            loading={isLoading}
            defaultPageSize={10}
            showPageSizeOptions={true}
            minRows={0}
          />
        )}
      </Wrapper>
    );
  }
}
export default StudentList;
