import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Button extends Component {

    render () {
       return <TouchableOpacity style={this.styles.buttonStyle} onPress={this.props.onPress}>
           <Text style={this.styles.textStyle}>{this.props.title}</Text>
       </TouchableOpacity>
    }

    styles = {
        textStyle: {
            alignSelf: 'center',
            color: '#007aff',
            fontSize: 16,
            fontWeight: '600',
            paddingTop: 10,
            paddingBottom: 10
        },
        buttonStyle: {
            flex: 1,
            alignSelf: 'stretch',
            backgroundColor: '#fff',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#007aff',
            marginLeft: 5,
            marginRight: 5
        }
    }

}

export {Button};