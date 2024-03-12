import React, { Component } from "react";
import Students from "./Students";

export class App extends Component {
    state = {
        students: [
            { name: "Younes", age: 17, color: "White", Img: "./1.jpg" },
            { name: "AmirAli", age: 17, color: "Red", Img: "./3.jpg" },
            { name: "AmirHossein", age: 16, color: "Blue", Img: "./4.jpg" },
            { name: "Sajjad", age: 19, color: "Green", Img: "./2.jpg" },
        ],
    };

    render() {
        return (
            <div>
                <h1>Welcome to React project</h1>
                <p>This is my first react project</p>
                <Students students={this.state.students} />
            </div>
        );
    }
}

export default App;
