import React from 'react';
import ButtonProps from '../componentProps/Button';
import style from '../styles/Button.css';
import generateStyle from '../utils/generateStyle';

const SSButton = ({
    size,
    color,
    behavior,
    clickAction,
    children,
}) => (
    <button
        style={generateStyle('SSButton', style, { size, color, behavior })}
        onClick={clickAction}
    >
        {children}
    </button>
);

SSButton.propTypes = ButtonProps;

export default SSButton;
