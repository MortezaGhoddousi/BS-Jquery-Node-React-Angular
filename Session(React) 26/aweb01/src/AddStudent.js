import React, { Component } from 'react'

export class AddStudent extends Component {
    state={
        name: null,
        age: null,
        color: null
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.add(this.state);
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name: </label>
                <input type='text' id='name' onChange={this.handleChange}/>
                <label htmlFor='age'>Age: </label>
                <input type='text' id='age' onChange={this.handleChange}/>
                <label htmlFor='color'>Color: </label>
                <input type='text' id='color' onChange={this.handleChange}/>
                <input type='submit' value='Submit' />
            </form>
        </div>
        )
    }
}

export default AddStudent
