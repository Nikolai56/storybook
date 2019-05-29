import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    button: {
        border: 'none',
        cursor: 'pointer',
        padding: '7px 20px 9px',
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: '24px',
        borderRadius: '4px',
    },
    primary: {
        backgroundColor: '#295641',
        color: '#ffffff',
    },
    secondary: {
        color: '#ffffff',
        backgroundColor: '#4caf50',
    },
};

const Button = ({ children, disabled, onClick, type, style }) => (
    <button
        type="button"
        disabled={disabled}
        onClick={onClick}
        style={{
            ...styles.button,
            ...styles[type],
            ...style,
        }}
    >
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['regular', 'small', 'big']),
    type: PropTypes.oneOf(['primary', 'secondary']),
    style: PropTypes.shape({}),
};

Button.defaultProps = {
    children: 'Regular Button',
    disabled: false,
    onClick: () => {},
    size: 'regular',
    type: 'primary',
    style: {},
};

export default Button;
