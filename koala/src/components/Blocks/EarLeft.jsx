import React, { Component } from 'react';
import OuterEarLeft from '../Houses/OuterEarLeft';
import InnerEarLeft from '../Houses/InnerEarLeft';

class EarLeft extends Component {
    render() {
        return (
            <div>
                <OuterEarLeft/>
                <InnerEarLeft/> 
            </div>
        )
    }
}

export default EarLeft;