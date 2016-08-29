import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import ButtonProps from '../componentProps/Button';
import style from '../styles/Button.css';
import generateStyle from '../utils/generateStyle';

const SSButton = ({
    size,
    color,
    behavior,
    disabled,
    onPress,
    onPressIn,
    onPressOut,
    onLongPress,
    children,
}) => {
    const touchableProps = {};
    if (!disabled) {
        touchableProps.onPress = onPress;
        touchableProps.onPressIn = onPressIn;
        touchableProps.onPressOut = onPressOut;
        touchableProps.onLongPress = onLongPress;
    }
    return (
        <TouchableOpacity
            {...touchableProps}
            style={StyleSheet.create(generateStyle('SSButton', style, { size, color, behavior }))}
        >
            <Text>{children}</Text>
        </TouchableOpacity>
    );
};

SSButton.propTypes = {
    ...TouchableOpacity.propTypes,
    ...ButtonProps,
};

export default SSButton;
