import React from 'react';
import Typed from 'react-typed';
import "../styleComponents/MyLetters.scss";

const ApparitionLetters = () => {
    return (
        <div className="apparition-letters">
            <Typed
                strings={[
                    "Sophia",
                    "Sophia Frontend",
                    "Sophia Frontend Web Developer"
                ]}
                typeSpeed={100}
                backSpeed={50}
                backDelay={1000}
                startDelay={500}
                loop={true}
            />
        </div>
    );
};

export default ApparitionLetters;
