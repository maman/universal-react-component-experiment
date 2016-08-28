import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import ButtonProps from '../componentProps/Button';
import style from '../styles/Button.css';
import generateStyle from '../utils/generateStyle';

class SSButton extends Component {
    static propTypes = {
        ...TouchableOpacity.propTypes,
        ...ButtonProps,
    }

    render() {
        const { size, color, behavior, disabled, onPress, onPressIn, onPressOut, onLongPress, children } = this.props;
        const touchableProps = {};
        if (!disabled) {
            touchableProps.onPress = onPress;
            touchableProps.onPressIn = onPressIn;
            touchableProps.onPressOut = onPressOut;
            touchableProps.onLongPress = onLongPress;
        }
        return (
            <button
                style={StyleSheet.create(generateStyle('SSButton', style, { size, color, behavior }))}
            >
                {children}
            </button>
        );
    }
}

export default SSButton;
