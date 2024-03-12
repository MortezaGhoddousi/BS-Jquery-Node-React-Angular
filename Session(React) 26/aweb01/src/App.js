import React, { Component } from "react";
import Students from "./Students";
import AddStudent from "./AddStudent";

export class App extends Component {
    state = {
        students: [
            { name: "Younes", age: 17, color: "White", Img: "./1.jpg", id: 1 },
            { name: "AmirAli", age: 17, color: "Red", Img: "./3.jpg", id: 2 },
            { name: "AmirHossein", age: 16, color: "Blue", Img: "./4.jpg", id: 3 },
            { name: "Sajjad", age: 19, color: "Green", Img: "./2.jpg", id: 4 },
        ],
    };

    addstudentmethod = (student) => {
        console.log(student);
        student.id = Math.random();
        let newstudents = [...this.state.students, student];
        this.setState({
            students: newstudents
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome to React project</h1>
                <p>This is my first react project</p>
                <Students students={this.state.students} />
                <AddStudent add={this.addstudentmethod}/>
            </div>
        );
    }
}

export default App;
