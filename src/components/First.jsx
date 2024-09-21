import React, { useState } from 'react'
import Second from './Second'

const First = () => {

    const [tags, setTags] = useState([
        {
            id: 1,
            name: 'Tag1',
        },
        {
            id: 2,
            name: 'Tag2',
        },
    ]);

    const [tag, setTag] = useState(null);

    const handleChange = (value) => {
        let name = value;
        let tag = {
            name,
        };

        setTag(tag);
    };
    
    const handleClick = () => {
        tag.id = tags.length + 1;
        console.log(tag);
        setTag(null);
        setTags((tags) => [...tags, tag]);
        console.log(tags);
    }

  return (
    <div>
        <input onChange={(e) => handleChange(e.target.value)} /> 
        <button onClick={handleClick}>Submit</button>
        <div>First</div>
        <Second tags={tags} />
    </div>
  )
}

export default First