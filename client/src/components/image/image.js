import React from 'react';

const Image = (props) => {
    return <img {...props} src={props.src} alt={props.alt} />;
};

export default Image;
