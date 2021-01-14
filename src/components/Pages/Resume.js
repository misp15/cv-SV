import React from 'react';

const Resume = ({text}) =>{    
    const blocks = text.map( ({label, text, index}) => {
        return(
            <div key={Math.floor(Math.random() * 200)}>
                <h2><span>{label}</span></h2>
                <p>{text}</p>
            </div>           
        );
     });
    return(
        <div>
            {blocks}
        </div>
    );
};

export default Resume;