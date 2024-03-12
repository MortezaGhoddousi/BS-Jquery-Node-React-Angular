import React, { Component } from "react";

export class Students extends Component {
    render() {
        const { students } = this.props;
        const studentsList = students.map((student) => {
            return (
                <div className="student">
                    <div>Name: {student.name}</div>
                    <div>Age: {student.age}</div>
                    <div>Color: {student.color}</div>
                    <div>
                        <img src={student.Img} alt=""></img>
                    </div>
                </div>
            );
        });
        return (
            <div className="stu">
                {/* <div>Name: {this.props.name}</div>
                <div>Age: {this.props.age}</div>
                <div>Color: {this.props.Color}</div>
                <div>
                    <img src={this.props.Img} alt=""></img>
                </div> */}
                {studentsList}
            </div>
        );
    }
}

export default Students;
