import React, { Component } from 'react';
import EarLeft from '../Blocks/EarLeft';
import EarRight from '../Blocks/EarRight';
import EyeLeft from '../Blocks/EyeLeft';
import EyeRight from '../Blocks/EyeRight';
import Nose from '../Houses/Nose';
import HairLeft from '../Houses/HairLeft';
import HairRight from '../Houses/HairRight';
import Head from '../Houses/Head';

class Box extends Component {
    render() {
        return (
            <div className="box">
                <EarLeft/>
                <EarRight/>
                <EyeLeft/>
                <EyeRight/>
                <Head/>
                <Nose/>
                <HairLeft/>
                <HairRight/>
            </div>
        )
    }
}

export default Box;