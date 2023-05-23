import { useState } from 'react';

const OpportunityCards = (props) => {

    const [selected, setSelected] = useState(false);
    const handleClick = () => {
        setSelected(!selected);
    };

    return (
        <div className={`cursor-pointer border border-black-500 p-4 rounded-lg h-[8.2rem] w-[16.5rem] ${selected ? 'border-2 border-black' : ''}`} onClick={handleClick}>
            <h1 className="mb-3 font-semibold text-base">{props.heading}</h1>
            <p className="text-sm text-slate-600">{props.para}</p>
        </div>
    );
};

export default OpportunityCards;