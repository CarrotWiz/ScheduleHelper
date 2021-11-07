import React, { useState } from 'react';
import '../styles/browseclasses.css';

function BrowseClasses(props) {

    const [selectedClass, setSelectedClass] = new useState(null);
    const class1 = {
        name: "CSE2221",
        creditHours: 4,
        prerequisites: []
    }
    const class2 = {
        name: "CSE2231",
        creditHours: 4,
        prerequisites: ["CSE2221"]
    }
    const class3 = {
        name: "CSE3231",
        creditHours: 3,
        prerequisites: ["CSE2231"]
    }
    const tempClasses = [class1, class2, class3];

    const printClasses = (classes) => {
        return (
            <ul>
                {classes.map((c) =>
                    <li key={c.name} onClick={() => setSelectedClass(c)}>
                        {c.name}
                    </li>)
                }
            </ul>
        )
    }

    const displayClass = (c) => {
        return (
            <div className="displayClass">
                <p>{c.name}</p>
                <p>{c.creditHours}</p>
                {console.log(c.prerequ)}
            </div>
        )
    }

    return (
        <div>
            BROWSE CLASSES
            {printClasses(props.courses)}
            {selectedClass !== null ? displayClass(selectedClass) : null}
        </div>
    )
}

export default BrowseClasses;
