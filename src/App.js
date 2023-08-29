import React from "react";
import students from "./data/students.json";
import StudentComponent from "./components/StudentComponent/StudentComponent";

const INITIAL_STATE = { students: students };

class App extends React.Component {
    state = { ...INITIAL_STATE };

    render() {
        return (
            <>
                {this.state.students.map((student, index) => {
                    return (
                        <StudentComponent
                            name={student.name}
                            key={index}
                            onDeleteButtonClick={() => {
                                this.setState((prevState) => {
                                    var nextState = { students: [] };
                                    for (let studentElement of prevState.students) {
                                        if (
                                            studentElement.name != student.name
                                        ) {
                                            nextState.students.push(
                                                studentElement
                                            );
                                        }
                                    }
                                    console.log(nextState);
                                    return nextState;
                                });
                            }}
                        ></StudentComponent>
                    );
                })}
            </>
        );
    }
}

export default App;
