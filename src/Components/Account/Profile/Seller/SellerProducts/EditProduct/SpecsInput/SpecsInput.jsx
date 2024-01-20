import React, { useEffect, useState } from 'react';

function SpecsInput(props) {
    const [specs, setSpecs] = useState([{ key: '', value: '' }]);

    useEffect(() => {
        props.specsData(specs);
    }, [specs]);

    const addSpec = () => {
        setSpecs([...specs, { key: '', value: '' }]);
    };

    const removeLastSpec = () => {
        if (specs.length > 1) {
            setSpecs(specs.slice(0, -1));
        }
    };

    const handleKeyChange = (index, value) => {
        setSpecs(prevSpecs =>
            prevSpecs.map((s, i) => (i === index ? { ...s, key: value } : s))
        );
        props.specsData(specs); 
    };
    
    const handleValueChange = (index, value) => {
        setSpecs(prevSpecs =>
            prevSpecs.map((s, i) => (i === index ? { ...s, value: value } : s))
        );
        props.specsData(specs);
    };

    return (
        <div className="container">
            <label><b>Specifications</b> (eg: Size = S,L,XL)</label>
            {specs.map((spec, index) => (
                <div key={index} className="d-flex mb-2">
                    <input
                        type="text"
                        className="form-control me-2"
                        placeholder="Key"
                        value={spec.key}
                        onChange={(e) => handleKeyChange(index, e.target.value)}                    />
                    <input
                        type="text"
                        className="form-control me-2"
                        placeholder="Value"
                        value={spec.value}
                        onChange={(e) => handleValueChange(index, e.target.value)}
                    />
                </div>
            ))}

            <div className="d-flex justify-content-center mt-3">
                <button type="button" className="btn btn-outline-primary me-2" onClick={addSpec}>
                    Add Specs
                </button>
                <button type="button" className="btn btn-outline-danger" onClick={removeLastSpec}>
                    Remove Specs
                </button>
            </div>
        </div>
    );
}

export default SpecsInput;