import React from 'react';

import './Button.scss';

const Button = props => {
    const { buttonTitle } = props;

    return (
        <div className="buttonContainer">
            <button>{buttonTitle}</button>
        </div>
    );
};

export default Button;