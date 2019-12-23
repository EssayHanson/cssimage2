import React, { Component } from 'react';
import OuterEyeLeft from '../Houses/OuterEyeLeft';
import PupilLeft from '../Houses/PupilLeft';

class EyeLeft extends Component {
    render() {
        return (
            <div>
                <OuterEyeLeft/>
                <PupilLeft/>
            </div>    
        )
    }
}

export default EyeLeft;