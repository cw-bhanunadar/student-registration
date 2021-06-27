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

class StudentsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.id,
            name: '',
            department: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleUpdateStudent = async () => {
        const { id, name, department } = this.state
        const payload = { id, name, department }

        await api.updateStudent(payload).then(res => {
            window.alert(`Student updated successfully`)
            this.setState({
                name: '',
                department: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const Student = await api.getStudentById(id)

        this.setState({
            name: Student.name,
            department: Student.department,
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

                <Button onClick={this.handleUpdateStudent}>Update Student</Button>
                <CancelButton href={'/'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default StudentsUpdate