import React, { useState } from 'react'
import Second from './Second'
import { useTagAddContext } from '../Context/TagsContext';

const First = () => {
    const [tag, setTag] = useState('');
    const tagAdd = useTagAddContext();

    const handleChange = (value) => {
        setTag(value);
    };

    const handleClick = () => {
        tagAdd(tag);
        setTag('');
    }

    return (
        <>
            <input onChange={(e) => handleChange(e.target.value)} value={tag} />
            <button onClick={() => handleClick()}>Submit</button>
            <div>First</div>
            <Second />
        </>
    )
}

export default First