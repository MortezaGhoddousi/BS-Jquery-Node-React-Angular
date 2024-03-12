import React from "react";

const Students = (props) => {
    
    const { students } = props;
    const studentsList = students.map((student) => {
        // if (student.age > 16) {
        //     return (
        //         <div className="students" key={student.id}>
        //             <div>Name: {student.name}</div>
        //             <div>Age: {student.age}</div>
        //             <div>Color: {student.color}</div>
        //         </div>
        //     )
        // }
        // else {
        //     return null
        // }


        return student.age>16 ? (
            <div className="students" key={student.id}>
                <div>Name: {student.name}</div>
                <div>Age: {student.age}</div>
                <div>Color: {student.color}</div>
            </div>
        ):
        null


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

export default Students;
