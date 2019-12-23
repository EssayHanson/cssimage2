import React, { Component } from "react";

class Buttons extends Component {

    render() {
        return (
            <div>
                <button>{this.props.text1}</button>
                <br/>
                <button>{this.props.text2}</button>
            </div>
        )
    }
}

export default Buttons;