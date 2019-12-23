import React, { Component } from 'react';
import OuterEarRight from '../Houses/OuterEarRight';
import InnerEarRight from '../Houses/InnerEarRight';

class EarRight extends Component {
    render() {
        return (
            <div>
                <OuterEarRight/>
                <InnerEarRight/>
            </div>
        )
    }
}

export default EarRight;