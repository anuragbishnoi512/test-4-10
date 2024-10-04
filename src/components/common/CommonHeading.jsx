import React from 'react'


const CommonHeading = ({ heading, className }) => {
    return (
        <h2 className={`${className} font-messiri font-bold text-custom-xl leading-custom-xl text-center text-darkBlue`}>
            {heading}
        </h2>
    );
};

export default CommonHeading