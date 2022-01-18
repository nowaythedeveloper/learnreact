import React from "react";

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    render() {
        return(
            <div>
                <h1>It is {this.state.date.toLocaleDateString()}</h1>
            </div>
        )
    }

}

export default Time