import React from 'react';
import ProgrammingTutorials from '../Tutorials/ProgrammingTutorials/ProgrammingTutorials';
import OtherTutorials from '../Tutorials/OtherTutorials/OtherTutorials';

const Tutorials = () => {
    return (
        <div id="outline-container-orgheadline5" class="outline-2">
            <h2 id="tutorials">
                <a id="orgheadline5"></a>
                <span class="section-number-2">5</span>
                {' Tutorials'}
            </h2>
            <div class="outline-text-2" id="text-tutorials">
                <p>
                    Here is the text for the Tutorials section.
                </p>
            </div>
            
            {/** Tutorial Types */}
            <ProgrammingTutorials />
            <OtherTutorials />
            
        </div>
    );
}

export default Tutorials;