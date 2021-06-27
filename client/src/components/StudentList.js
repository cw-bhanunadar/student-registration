import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from "../api";

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`
const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`
const colums = []
class StudentList extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            students = [{
                id:1,
                name:"bhanu",
                department:"Comps"
            },
            {
                id:1,
                name:"Don",
                department:"Comps"
            }],
            isLoading:false
        }
        
    }
    componentDidMount(){
        api.getAll().then(function(res){
            // set State
        })
        this.setState({showTable:true})
    }
    render(){
        let { students, showTable}
        return (
            showTable && (
                <ReactTable>

                </ReactTable>
            )
        )
        
    }
}