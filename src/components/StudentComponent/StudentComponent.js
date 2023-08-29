import React from "react";

class StudentComponent extends React.Component {
    state = { name: this.props.name };

    render() {
        return (
            <>
                <p>{this.state.name}</p>
                <button onClick={this.props.onDeleteButtonClick}>Delete</button>
            </>
        );
    }
}

export default StudentComponent;
