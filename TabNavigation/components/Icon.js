import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Icon extends Component {
    render (){
        return (
            <Image
                source={this.props.img}
                style={{ width:28, height:28 }}
            />
        );
    }
}
