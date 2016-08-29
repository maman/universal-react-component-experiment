import { PropTypes } from 'react';

const ButtonProps = {
    size: PropTypes.oneOf(['small', 'large']),
    color: PropTypes.oneOf(['red', 'blue', 'orange', 'green', 'black']),
    behavior: PropTypes.oneOf(['block']),
    disable: PropTypes.bool,
    clickAction: PropTypes.func,
    children: PropTypes.string,
};

export default ButtonProps;
