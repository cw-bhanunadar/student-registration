import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class StudentsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            department: ''
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputDepartment = async event => {
        const department = event.target.value
        this.setState({ department })
    }

    handleInsertStudent = async () => {
        const { name, department } = this.state
        const payload = { name, department }

        await api.insertStudent(payload).then(res => {
            window.alert(`Student inserted successfully`)
            this.setState({
                name: '',
                department: ''
            })
        })
    }

    render() {
        const { name, department } = this.state
        return (
            <Wrapper>
                <Title>Create Student</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />
                <Label>Department: </Label>
                <InputText
                    type="text"
                    value={department}
                    onChange={this.handleChangeInputDepartment}
                />

                <Button onClick={this.handleInsertStudent}>Add Student</Button>
                <CancelButton href={'/Students/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default StudentsInsert